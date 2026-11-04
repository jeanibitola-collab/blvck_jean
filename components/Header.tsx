"use client";
import { useState } from "react";
import Image from "next/image";

const links = [
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/95 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-3">
        <a
          href="#"
          className="flex min-w-0 items-center gap-3 whitespace-nowrap text-base font-bold uppercase tracking-wide sm:text-lg"
        >
          <Image
            src="/logo.png"
            alt="Olakunle Ibitola logo"
            width={512}
            height={512}
            priority
            className="h-10 w-10 shrink-0 rounded-lg"
          />
          <span className="truncate">Olakunle Ibitola</span>
        </a>

        {/* Desktop menu */}
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-slate-300 hover:text-white">
              {l.label}
            </a>
          ))}
          <a
            href="/olakunle-ibitola-cv.pdf"
            download
            className="rounded-lg border border-emerald-400 px-4 py-2 text-sm font-semibold text-emerald-400 hover:bg-emerald-400 hover:text-black"
          >
            Download CV
          </a>
        </nav>

        {/* Three-line button (phone) */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="shrink-0 p-1 md:hidden"
        >
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Phone menu */}
      {open && (
        <nav className="border-t border-slate-800 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 text-slate-200 hover:bg-slate-900"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/olakunle-ibitola-cv.pdf"
            download
            onClick={() => setOpen(false)}
            className="block px-6 py-3 font-semibold text-emerald-400 hover:bg-slate-900"
          >
            Download CV
          </a>
        </nav>
      )}
    </header>
  );
}