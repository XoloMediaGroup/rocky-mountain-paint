import { useEffect, useState } from "react"
import { site } from "../data/site"
import type { Page } from "../lib/pages"

const links: { href: Page; label: string }[] = [
  { href: "home", label: "Home" },
  { href: "work", label: "Work" },
  { href: "services", label: "Services" },
  { href: "contact", label: "Contact" },
]

export function Header({ page }: { page: Page }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const onHero = page === "home" && !scrolled

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [page])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        onHero ? "bg-navy/20 backdrop-blur-[2px]" : "bg-navy shadow-lg shadow-black/20"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:bg-rust focus:px-3 focus:py-2 focus:text-paper"
      >
        Skip to content
      </a>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <a href="#home" className="shrink-0">
          <img
            src="/images/logo.png"
            alt="Rocky Mountain Paint LLC"
            className="h-12 w-auto rounded-md bg-paper px-2 py-1 sm:h-14"
          />
        </a>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.href}
              href={`#${link.href}`}
              aria-current={page === link.href ? "page" : undefined}
              className={`text-[0.82rem] font-semibold uppercase tracking-[0.16em] ${
                page === link.href ? "text-rust" : "text-paper/85 hover:text-paper"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href={site.phoneHref}
            className="rounded-full bg-rust px-5 py-2 text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-paper hover:bg-rust-dark"
          >
            Call now
          </a>
        </nav>
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-full bg-rust px-3 py-2 text-paper md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden="true">
            {open ? (
              <path d="M1 1l16 12M17 1L1 13" stroke="currentColor" strokeWidth="1.8" />
            ) : (
              <path d="M0 1h18M0 7h18M0 13h18" stroke="currentColor" strokeWidth="1.8" />
            )}
          </svg>
          <span className="text-[0.7rem] font-semibold uppercase tracking-[0.14em]">Menu</span>
        </button>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-navy px-5 py-5 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a key={link.href} href={`#${link.href}`} className="font-display text-2xl text-paper">
                {link.label}
              </a>
            ))}
            <a href={site.phoneHref} className="text-paper/80">
              {site.phone}
            </a>
            <a
              href="#contact"
              className="rounded-full bg-rust px-5 py-3 text-center text-sm font-semibold uppercase tracking-[0.14em] text-paper"
            >
              Free estimate
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
