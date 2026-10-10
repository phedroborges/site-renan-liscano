"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PAGINAS } from "@/lib/navegacao";
import { site, whats } from "@/lib/site";
import { Icon } from "./Icon";
import styles from "./Header.module.css";


export function Header() {
  const pathname = usePathname();
  const [menuAberto, setMenuAberto] = useState(false);
  const menuBotao = useRef<HTMLButtonElement>(null);
  const ativo = (href: string) => pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));
  const [rolou, setRolou] = useState(false);
  const [escuro, setEscuro] = useState(true);

  useEffect(() => {
    const onScroll = () => setRolou(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const carimbo = document.documentElement.getAttribute("data-theme");
    if (carimbo === "light") setEscuro(false);
    else if (carimbo === "dark") setEscuro(true);
    else setEscuro(!window.matchMedia?.("(prefers-color-scheme: light)").matches);
  }, []);

  useEffect(() => {
    if (!menuAberto) return;
    const fechar = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuAberto(false);
        menuBotao.current?.focus();
      }
    };
    window.addEventListener("keydown", fechar);
    return () => window.removeEventListener("keydown", fechar);
  }, [menuAberto]);

  function trocarTema() {
    const proximo = escuro ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", proximo);
    try { localStorage.setItem("liscano-tema", proximo); } catch { /* sem persistência, tudo bem */ }
    setEscuro(!escuro);
  }

  return (
    <header className={`${styles.header} ${rolou || menuAberto ? styles.solido : ""}`}>
      <div className={styles.interno}>
        <Link href="/" onClick={() => setMenuAberto(false)} className={styles.marca} aria-label={`${site.nome}, início`}>
          <span className={`${styles.icone} metal`}>LR</span>
          <span className={styles.nome}>
            Renan Liscano
            <em className={styles.sub}>Advogados</em>
          </span>
        </Link>

        <nav className={styles.nav} aria-label="Navegação principal">
          {PAGINAS.filter((i) => i.href !== "/").map((i) => (
            <Link key={i.href} href={i.href} className={styles.link} aria-current={ativo(i.href) ? "page" : undefined}>{i.label}</Link>
          ))}
        </nav>

        <div className={styles.acoes}>
          <button
            type="button"
            onClick={trocarTema}
            className={styles.tema}
            aria-label={escuro ? "Mudar para o tema claro" : "Mudar para o tema escuro"}
          >
            <Icon name={escuro ? "sun" : "moon"} size={15} />
          </button>
          <a href={whats("cabeçalho do site")} className={`btn btn-primary ${styles.cta}`} target="_blank" rel="noopener">
            <Icon name="whatsapp" size={16} />
            WhatsApp
          </a>
          <button ref={menuBotao} type="button" className={styles.menuBotao} aria-expanded={menuAberto} aria-controls="menu-mobile" onClick={() => setMenuAberto(!menuAberto)}>
            {menuAberto ? "Fechar" : "Menu"}
          </button>
        </div>
      </div>
      <nav id="menu-mobile" className={styles.menuMobile} aria-label="Navegação principal no celular" hidden={!menuAberto}>
        {PAGINAS.map((i) => (
          <Link key={i.href} href={i.href} onClick={() => setMenuAberto(false)} className={styles.link} aria-current={ativo(i.href) ? "page" : undefined}>{i.label}</Link>
        ))}
      </nav>
    </header>
  );
}
