import fs from "node:fs";
import path from "node:path";

const raiz = process.cwd();
const entrada = path.resolve(raiz, process.argv[2] || "out");
const saida = path.resolve(raiz, process.argv[3] || "vizantu-dist");

if (!fs.existsSync(path.join(entrada, "index.html"))) {
  throw new Error(`Exportação estática não encontrada em ${entrada}`);
}

function arquivosEm(diretorio) {
  return fs.readdirSync(diretorio, { withFileTypes: true }).flatMap((item) => {
    const arquivo = path.join(diretorio, item.name);
    return item.isDirectory() ? arquivosEm(arquivo) : [arquivo];
  });
}

function mime(arquivo) {
  const extensao = path.extname(arquivo).toLowerCase();
  return ({
    ".avif": "image/avif",
    ".gif": "image/gif",
    ".jpeg": "image/jpeg",
    ".jpg": "image/jpeg",
    ".png": "image/png",
    ".svg": "image/svg+xml",
    ".webp": "image/webp",
    ".woff": "font/woff",
    ".woff2": "font/woff2",
  })[extensao] || "application/octet-stream";
}

const dataUriCache = new Map();
function dataUri(arquivo) {
  const absoluto = path.resolve(arquivo);
  if (dataUriCache.has(absoluto)) return dataUriCache.get(absoluto);
  if (!fs.existsSync(absoluto) || !fs.statSync(absoluto).isFile()) return null;
  const valor = `data:${mime(absoluto)};base64,${fs.readFileSync(absoluto).toString("base64")}`;
  dataUriCache.set(absoluto, valor);
  return valor;
}

function atributo(valor) {
  return valor.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;");
}

function texto(valor) {
  return valor.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function rotaDoArquivo(arquivo) {
  const relativo = path.relative(entrada, arquivo).split(path.sep).join("/");
  if (relativo === "index.html") return "/";
  return `/${relativo.replace(/\/index\.html$/, "")}/`.replace(/\/{2,}/g, "/");
}

function normalizarRota(valor) {
  const limpa = valor.split("#")[0].split("?")[0] || "/";
  if (limpa === "/") return "/";
  return `/${limpa.replace(/^\/+|\/+$/g, "")}/`;
}

const paginas = arquivosEm(entrada)
  .filter((arquivo) => arquivo.endsWith(`${path.sep}index.html`) || arquivo === path.join(entrada, "index.html"))
  .map((arquivo) => ({ arquivo, rota: rotaDoArquivo(arquivo), html: fs.readFileSync(arquivo, "utf8") }))
  .filter((pagina) => pagina.rota !== "/404/")
  .sort((a, b) => a.rota.localeCompare(b.rota));

const rotas = new Set(paginas.map((pagina) => pagina.rota));

const cssArquivos = new Set();
for (const pagina of paginas) {
  for (const tag of pagina.html.match(/<link\b[^>]*>/gi) || []) {
    if (!/rel=["']stylesheet["']/i.test(tag)) continue;
    const href = tag.match(/href=["']([^"']+)["']/i)?.[1];
    if (href?.startsWith("/")) cssArquivos.add(path.join(entrada, href.replace(/^\//, "")));
  }
}

let css = "";
for (const arquivo of [...cssArquivos].sort()) {
  if (!fs.existsSync(arquivo)) continue;
  const pasta = path.dirname(arquivo);
  const conteudo = fs.readFileSync(arquivo, "utf8").replace(
    /url\((['"]?)([^)'"\s]+)\1\)/g,
    (original, _aspas, url) => {
      if (/^(?:data:|https?:|#)/i.test(url)) return original;
      const caminho = decodeURIComponent(url.split("?")[0]);
      const incorporado = dataUri(caminho.startsWith("/") ? path.join(entrada, caminho.replace(/^\//, "")) : path.resolve(pasta, caminho));
      return incorporado ? `url("${incorporado}")` : original;
    },
  );
  css += `\n${conteudo}`;
}

const recursosHtml = new Map();

function incorporarArquivo(url) {
  if (!url.startsWith("/") || url.startsWith("//")) return null;
  const recurso = dataUri(path.join(entrada, decodeURIComponent(url.split("?")[0].replace(/^\//, ""))));
  if (!recurso) return null;
  recursosHtml.set(url, recurso);
  return url;
}

function prepararCorpo(pagina) {
  const corpo = pagina.html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1] || "";
  return corpo
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/\s(?:src|poster)=["']([^"']+)["']/gi, (original, url) => {
      const incorporado = incorporarArquivo(url);
      const nome = original.trimStart().split("=")[0];
      if (!incorporado) return original;
      const reserva = nome === "src" ? "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" : "";
      return ` ${nome}="${reserva}" data-vz-${nome}="${atributo(incorporado)}"`;
    })
    .replace(/\shref=["']([^"']+)["']/gi, (original, href) => {
      if (!href.startsWith("/") || href.startsWith("//")) return original;
      const [caminho, ancora] = href.split("#");
      const rota = normalizarRota(caminho);
      if (!rotas.has(rota)) return original;
      return ` href="#${rota}${ancora ? `#${ancora}` : ""}"`;
    })
    .replace(/\s(?:data-nimg|fetchpriority)=["'][^"']*["']/gi, "");
}

const preparadas = paginas.map((pagina) => {
  const titulo = pagina.html.match(/<title>([\s\S]*?)<\/title>/i)?.[1] || "Renan Liscano Advogados";
  const descricao = pagina.html.match(/<meta\s+name=["']description["']\s+content=["']([^"']*)["']/i)?.[1] || "";
  return { ...pagina, titulo, descricao, corpo: prepararCorpo(pagina) };
});

const inicio = preparadas.find((pagina) => pagina.rota === "/");
if (!inicio) throw new Error("A página inicial não foi encontrada.");

const templates = preparadas
  .filter((pagina) => pagina.rota !== "/")
  .map(
    (pagina) =>
      `<template data-vz-route="${atributo(pagina.rota)}" data-vz-title="${atributo(pagina.titulo)}" data-vz-description="${atributo(pagina.descricao)}">${pagina.corpo}</template>`,
  )
  .join("\n");

const leitorClasses = {
  p: css.match(/\.([A-Za-z0-9_-]*Leitor_t_p__[A-Za-z0-9_-]+)/)?.[1] || "",
  m: css.match(/\.([A-Za-z0-9_-]*Leitor_t_m__[A-Za-z0-9_-]+)/)?.[1] || "",
  g: css.match(/\.([A-Za-z0-9_-]*Leitor_t_g__[A-Za-z0-9_-]+)/)?.[1] || "",
};
const triagemVoltarClasse = css.match(/\.([A-Za-z0-9_-]*Triagem_voltar__[A-Za-z0-9_-]+)/)?.[1] || "";

const cssCompatibilidade = `
.reveal{opacity:1!important;transform:none!important}
#vz-site-root.vz-route-enter{animation:vzRouteEnter .28s ease both}
@keyframes vzRouteEnter{from{opacity:.45;transform:translateY(5px)}to{opacity:1;transform:none}}
.vz-security-tab{position:fixed;right:0;top:52%;z-index:2147482000;border:1px solid #a87c2f;border-right:0;background:#111;color:#d5aa56;padding:15px 10px;writing-mode:vertical-rl;text-transform:uppercase;letter-spacing:.16em;font:600 11px Arial,sans-serif;cursor:pointer}
.vz-security-panel{position:fixed;right:18px;top:50%;z-index:2147482001;width:min(390px,calc(100vw - 36px));transform:translateY(-50%);padding:28px;background:#141414;color:#eee;border:1px solid #66502b;box-shadow:0 24px 80px rgba(0,0,0,.55);font-family:Arial,sans-serif}
.vz-security-panel[hidden]{display:none}.vz-security-panel h2{margin:14px 0;font:500 29px/1.08 var(--fonte-titulo),serif}.vz-security-panel p{color:#aaa;line-height:1.55}.vz-security-panel strong{color:#eee}.vz-security-close{position:absolute;right:14px;top:12px;border:0;background:transparent;color:#ddd;font-size:26px;cursor:pointer}.vz-security-ok{margin-top:8px;padding:13px 18px;border:0;background:#eee;color:#111;text-transform:uppercase;letter-spacing:.12em;font-weight:700;cursor:pointer}
@media(max-width:760px){.vz-security-tab{top:auto;bottom:58px}.vz-security-panel{right:10px;width:calc(100vw - 20px)}}
`;

const runtime = `
(function(){
  "use strict";
  var assets=${JSON.stringify(Object.fromEntries(recursosHtml))};
  var root=document.getElementById("vz-site-root");
  var home={html:root.innerHTML,title:root.getAttribute("data-title")||document.title,description:root.getAttribute("data-description")||""};
  var pages={"/":home};
  document.querySelectorAll("template[data-vz-route]").forEach(function(t){pages[t.dataset.vzRoute]={html:t.innerHTML,title:t.dataset.vzTitle,description:t.dataset.vzDescription}});
  var readerClasses=${JSON.stringify(leitorClasses)};
  var triageBackClass=${JSON.stringify(triagemVoltarClasse)};
  var current="/";
  function routeFromHash(){var raw=(location.hash||"#/ ").slice(1).trim();if(!raw||raw==="/")return{route:"/",anchor:""};var bits=raw.split("#");var route="/"+bits[0].replace(/^\\/+|\\/+$/g,"")+"/";return{route:pages[route]?route:"/",anchor:bits[1]||""}}
  function setMeta(page){document.title=page.title||home.title;var meta=document.querySelector('meta[name="description"]');if(meta)meta.setAttribute("content",page.description||home.description)}
  function render(){var target=routeFromHash();var page=pages[target.route]||home;current=target.route;root.classList.remove("vz-route-enter");root.innerHTML=page.html;void root.offsetWidth;root.classList.add("vz-route-enter");setMeta(page);initPage();if(target.anchor){setTimeout(function(){var el=document.getElementById(target.anchor);if(el)el.scrollIntoView()},0)}else scrollTo(0,0)}
  function initPage(){
    root.querySelectorAll("[data-vz-src]").forEach(function(el){var value=assets[el.getAttribute("data-vz-src")];if(value)el.setAttribute("src",value)});
    root.querySelectorAll("[data-vz-poster]").forEach(function(el){var value=assets[el.getAttribute("data-vz-poster")];if(value)el.setAttribute("poster",value)});
    root.querySelectorAll(".reveal").forEach(function(el){el.setAttribute("data-in","true")});
    var menuButton=root.querySelector('button[aria-controls="menu-mobile"]');var menu=root.querySelector("#menu-mobile");if(menuButton&&menu){menuButton.addEventListener("click",function(){var open=menuButton.getAttribute("aria-expanded")==="true";menuButton.setAttribute("aria-expanded",String(!open));menu.hidden=open;menuButton.textContent=open?"Menu":"Fechar"})}
    var theme=root.querySelector('button[aria-label^="Mudar para o tema"]');if(theme)theme.addEventListener("click",function(){var next=document.documentElement.getAttribute("data-theme")==="light"?"dark":"light";document.documentElement.setAttribute("data-theme",next);theme.setAttribute("aria-label",next==="dark"?"Mudar para o tema claro":"Mudar para o tema escuro");try{localStorage.setItem("liscano-tema",next)}catch(e){}});
    root.querySelectorAll('button[aria-controls][aria-expanded]').forEach(function(button){if(button===menuButton)return;button.addEventListener("click",function(){var panel=document.getElementById(button.getAttribute("aria-controls"));if(!panel)return;var open=button.getAttribute("aria-expanded")==="true";var group=button.closest('[class*="Acordeao_lista"]');if(group)group.querySelectorAll('button[aria-controls][aria-expanded="true"]').forEach(function(other){if(other!==button){other.setAttribute("aria-expanded","false");var otherPanel=document.getElementById(other.getAttribute("aria-controls"));if(otherPanel)otherPanel.hidden=true}});button.setAttribute("aria-expanded",String(!open));panel.hidden=open})});
    initTriage();initReader();
  }
  function initReader(){var controls=root.querySelector('[role="group"][aria-label="Tamanho do texto"]');if(!controls)return;var reading=controls.nextElementSibling;controls.querySelectorAll("button").forEach(function(button,index){button.addEventListener("click",function(){var size=["p","m","g"][index];controls.querySelectorAll("button").forEach(function(b){b.setAttribute("aria-pressed","false")});button.setAttribute("aria-pressed","true");Object.values(readerClasses).forEach(function(c){if(c)reading.classList.remove(c)});if(readerClasses[size])reading.classList.add(readerClasses[size]);try{localStorage.setItem("liscano-corpo",size)}catch(e){}})});var progress=root.querySelector('[class*="Leitor_progresso"] span');if(progress){var update=function(){var max=document.documentElement.scrollHeight-innerHeight;progress.style.width=(max>0?Math.min(100,scrollY/max*100):0)+"%"};addEventListener("scroll",update,{passive:true});update()}}
  var screens={
    inicio:{q:"Qual é a situação?",o:[["Tenho dívidas que não consigo pagar","dividas"],["Acho que estão me cobrando a mais","contrato"],["Sou médico ou profissional de saúde","medico"],["Fui lesado como consumidor","consumidor"],["Minha empresa tem dívidas","prazo","passivo bancário empresarial"],["Recebi uma cobrança tributária","prazo","dívida tributária ou execução fiscal"],["Preciso de defesa em execução ou busca e apreensão","prazo","defesa em execução ou busca e apreensão"],["Quero organizar meu patrimônio","prazo","planejamento patrimonial e holdings"],["Outro assunto","prazo","outro assunto"]]},
    dividas:{q:"O que mais pesa hoje?",o:[["Cartão de crédito ou cheque especial","prazo","dívida de cartão ou cheque especial"],["Empréstimo ou consignado","prazo","empréstimo ou consignado"],["Financiamento de casa ou carro","prazo","financiamento de casa ou carro"],["Meu nome está negativado","prazo","nome negativado"],["Mais de um desses ao mesmo tempo","prazo","várias dívidas ao mesmo tempo"]]},
    contrato:{q:"Você tem o contrato em mãos?",a:"Não ter não impede nada, a instituição é obrigada a fornecer cópia.",o:[["Tenho o contrato completo","prazo","revisão de contrato, tenho o contrato completo"],["Tenho só o extrato ou as parcelas","prazo","revisão de contrato, tenho só o extrato"],["Não tenho nada, mas sei qual é o banco","prazo","revisão de contrato, sem os documentos ainda"]]},
    medico:{q:"Qual delas?",o:[["Fiz residência médica","prazo","auxílio moradia da residência médica"],["Me formei com FIES","prazo","abatimento do FIES"],["Recebi notificação do CRM","prazo","processo ético no CRM"],["Quero registrar meu nome como marca","prazo","registro de marca"]]},
    consumidor:{q:"O que aconteceu?",o:[["Plano de saúde negou um procedimento","prazo","negativa do plano de saúde"],["Problema com voo","prazo","problema com voo"],["Cobrança que não reconheço","prazo","cobrança que não reconheço"]]},
    prazo:{q:"Há algum prazo correndo?",a:"É a única pergunta que muda a ordem de atendimento, por isso ela existe.",o:[["Sim, recebi uma notificação com prazo",null,"com prazo correndo"],["Sim, há urgência de saúde",null,"com urgência de saúde"],["Não sei dizer",null,"sem saber se há prazo"],["Não, é uma dúvida sem pressa",null,null]]}
  };
  function esc(value){return String(value||"").replace(/[&<>\"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
  function initTriage(){var box=root.querySelector('[class*="Triagem_caixa"]');if(!box)return;var first=box.querySelector('[class*="Triagem_tela"]');if(!first)return;var cls={bar:(box.querySelector('[class*="Triagem_barra"]')||{}).className||"",screen:first.className,count:(first.querySelector('[class*="Triagem_contador"]')||{}).className||"",question:(first.querySelector('[class*="Triagem_pergunta"]')||{}).className||"",support:(first.querySelector('[class*="Triagem_apoio"]')||{}).className||"",options:(first.querySelector('[class*="Triagem_opcoes"]')||{}).className||"",back:triageBackClass};var arrow=(first.querySelector("button svg")||{}).outerHTML||"→";var whatsapp=(root.querySelector('a[href*="wa.me"] svg')||{}).outerHTML||"";var history=[{id:"inicio",subjects:[]}],done=false;
    function draw(){var state=history[history.length-1],screen=screens[state.id],step=history.length,progress=done?100:Math.min(100,step/3*100);if(done){var message=state.subjects.length?"Olá! Vim pelo site. Meu caso é sobre "+state.subjects.join(", ")+".":"Olá! Vim pelo site e queria tirar uma dúvida.";box.innerHTML='<div class="'+cls.bar+'"><span style="width:100%"></span></div><div class="'+cls.screen+'"><p class="'+cls.count+'">Pronto</p><h3 class="'+cls.question+'">Sua mensagem está montada.</h3><p class="'+cls.support+'">É isto que vai ser enviado. Você pode editar tudo no WhatsApp antes de mandar.</p><blockquote style="margin:0 0 26px;padding:18px 20px;border-left:2px solid var(--platinum);background:var(--ink);color:var(--muted)">'+esc(message)+'</blockquote><a href="https://wa.me/5542991987371?text='+encodeURIComponent(message)+'" class="btn btn-primary btn-lg" target="_blank" rel="noopener">'+whatsapp+' Abrir o WhatsApp</a><button type="button" data-triage-restart class="'+cls.back+'">Recomeçar</button></div>';box.querySelector('[data-triage-restart]').onclick=function(){history=[{id:"inicio",subjects:[]}];done=false;draw()};return}
      box.innerHTML='<div class="'+cls.bar+'"><span style="width:'+progress+'%"></span></div><div class="'+cls.screen+'"><p class="'+cls.count+'">Pergunta '+step+' de 3</p><h3 class="'+cls.question+'">'+esc(screen.q)+'</h3>'+(screen.a?'<p class="'+cls.support+'">'+esc(screen.a)+'</p>':'')+'<div class="'+cls.options+'">'+screen.o.map(function(o,i){return'<button type="button" data-triage-option="'+i+'"><span>'+esc(o[0])+'</span>'+arrow+'</button>'}).join("")+'</div>'+(history.length>1?'<button type="button" data-triage-back class="'+cls.back+'">Voltar</button>':'')+'</div>';box.querySelectorAll('[data-triage-option]').forEach(function(button){button.onclick=function(){var option=screen.o[Number(button.dataset.triageOption)],subjects=state.subjects.slice();if(option[2])subjects.push(option[2]);if(option[1])history.push({id:option[1],subjects:subjects});else{history[history.length-1]={id:state.id,subjects:subjects};done=true}draw()}});var back=box.querySelector('[data-triage-back]');if(back)back.onclick=function(){history.pop();draw()}}
    draw();
  }
  document.addEventListener("click",function(event){var link=event.target.closest&&event.target.closest('a[href^="#/"]');if(!link)return;event.preventDefault();var next=link.getAttribute("href");if(location.hash===next)render();else location.hash=next});
  addEventListener("hashchange",render);
  var theme="";try{theme=localStorage.getItem("liscano-tema")||""}catch(e){}if(theme==="light"||theme==="dark")document.documentElement.setAttribute("data-theme",theme);
  initPage();if(location.hash&&location.hash!=="#/"&&location.hash!=="#")render();
  var securityTab=document.getElementById("vz-security-tab"),securityPanel=document.getElementById("vz-security-panel");if(securityTab&&securityPanel){securityTab.onclick=function(){securityPanel.hidden=false;securityTab.hidden=true};securityPanel.querySelectorAll("[data-vz-security-close]").forEach(function(button){button.onclick=function(){securityPanel.hidden=true;securityTab.hidden=false}})}
})();
`;

const documento = `<!doctype html>
<html lang="pt-BR" class="__variable_883c8c __variable_5afde0 __variable_46fe82">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="description" content="${atributo(inicio.descricao)}">
  <title>${texto(inicio.titulo)}</title>
  <style>${css}\n${cssCompatibilidade}</style>
</head>
<body>
  <div id="vz-site-root" data-title="${atributo(inicio.titulo)}" data-description="${atributo(inicio.descricao)}">${inicio.corpo}</div>
  <div hidden aria-hidden="true">${templates}</div>
  <button id="vz-security-tab" class="vz-security-tab" type="button" aria-label="Abrir aviso de segurança">◇ Segurança</button>
  <aside id="vz-security-panel" class="vz-security-panel" hidden aria-labelledby="vz-security-title">
    <button type="button" class="vz-security-close" data-vz-security-close aria-label="Fechar aviso">×</button>
    <small>AVISO DE SEGURANÇA</small>
    <h2 id="vz-security-title">Cuidado com o golpe do falso advogado.</h2>
    <p>Pedidos de pagamento são confirmados somente no grupo oficial do atendimento.</p>
    <p><strong>Se alguém chamar em privado pedindo dinheiro em nome do escritório, confirme no grupo antes de pagar.</strong></p>
    <button type="button" class="vz-security-ok" data-vz-security-close>Entendi</button>
  </aside>
  <script>${runtime}</script>
</body>
</html>`;

fs.mkdirSync(saida, { recursive: true });
fs.writeFileSync(path.join(saida, "index.html"), documento);
console.log(`Vizantu: ${preparadas.length} páginas incorporadas em ${path.join(saida, "index.html")}`);
console.log(`Tamanho: ${(Buffer.byteLength(documento) / 1024 / 1024).toFixed(2)} MB`);
