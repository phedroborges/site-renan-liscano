"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
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

  useEffect(() => {
    const onScroll = () => setRolou(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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

  // Nos artigos o cabeçalho é sólido desde o topo: a folha pode estar no modo
  // claro, e o cabeçalho transparente sumiria em cima dela.
  const solido = rolou || menuAberto || pathname.startsWith("/blog/");

  return (
    <header className={`${styles.header} ${solido ? styles.solido : ""}`}>
      <div className={styles.interno}>
        <Link href="/" onClick={() => setMenuAberto(false)} className={styles.marca} aria-label={`${site.nome}, início`}>
          <Image src="/img/logo-horizontal.webp" alt="" width={581} height={120} priority className={styles.logo} />
        </Link>

        <nav className={styles.nav} aria-label="Navegação principal">
          {PAGINAS.filter((i) => i.href !== "/").map((i) => (
            <Link key={i.href} href={i.href} className={styles.link} aria-current={ativo(i.href) ? "page" : undefined}>{i.label}</Link>
          ))}
        </nav>

        <div className={styles.acoes}>
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
