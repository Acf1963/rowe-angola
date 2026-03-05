import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header({ lang, setLang }: any) {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="
        fixed top-0 left-0 w-full z-50
        bg-black/40 backdrop-blur-md
        border-b border-white/10
        px-4 sm:px-6 py-3
        pointer-events-none
      "
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">

        {/* LOGO + ANGOLA */}
        <div className="flex items-center gap-3 relative" style={{ height: "40px" }}>
          <img
            src="/images/logo/lg02.png"
            alt="ROWE MOTOR OIL"
            className="h-8 sm:h-10 object-contain"
            style={{ transform: "scale(3.8)", transformOrigin: "left center" }}
          />

          <span
            className="
              text-yellow-400 font-bold text-sm sm:text-base tracking-wide
              absolute left-[135px] sm:left-[155px]
            "
          >
            ANGOLA
          </span>
        </div>

        {/* BOTÃO MOBILE */}
        <button
          className="text-white text-3xl md:hidden"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex gap-8 text-yellow-400 font-semibold text-sm md:text-base">
          <Link to="/" className="hover:text-white transition">Início</Link>
          <Link to="/produtos" className="hover:text-white transition">Produtos</Link>
          <Link to="/historia" className="hover:text-white transition">História</Link>
          <Link to="/contacto" className="hover:text-white transition">Contacto</Link>
        </nav>

        {/* BANDEIRAS DESKTOP */}
        <div className="hidden md:flex gap-2">
          <img src="/images/flags/ao.png" onClick={() => setLang("ao")} className={`h-5 cursor-pointer ${lang === "ao" ? "opacity-100" : "opacity-50"}`} />
          <img src="/images/flags/gb.png" onClick={() => setLang("gb")} className={`h-5 cursor-pointer ${lang === "gb" ? "opacity-100" : "opacity-50"}`} />
          <img src="/images/flags/de.png" onClick={() => setLang("de")} className={`h-5 cursor-pointer ${lang === "de" ? "opacity-100" : "opacity-50"}`} />
          <img src="/images/flags/fr.png" onClick={() => setLang("fr")} className={`h-5 cursor-pointer ${lang === "fr" ? "opacity-100" : "opacity-50"}`} />
        </div>
      </div>

      {/* MENU MOBILE */}
      {open && (
        <div className="md:hidden bg-black/80 text-yellow-400 px-6 py-4 flex flex-col gap-4 pointer-events-auto">

          <Link to="/" className="hover:text-white transition" onClick={() => setOpen(false)}>Início</Link>
          <Link to="/produtos" className="hover:text-white transition" onClick={() => setOpen(false)}>Produtos</Link>
          <Link to="/historia" className="hover:text-white transition" onClick={() => setOpen(false)}>História</Link>
          <Link to="/contacto" className="hover:text-white transition" onClick={() => setOpen(false)}>Contacto</Link>

          {/* BANDEIRAS MOBILE */}
          <div className="flex gap-4 mt-4">
            <img src="/images/flags/ao.png" onClick={() => setLang("ao")} className={`h-6 cursor-pointer ${lang === "ao" ? "opacity-100" : "opacity-50"}`} />
            <img src="/images/flags/gb.png" onClick={() => setLang("gb")} className={`h-6 cursor-pointer ${lang === "gb" ? "opacity-100" : "opacity-50"}`} />
            <img src="/images/flags/de.png" onClick={() => setLang("de")} className={`h-6 cursor-pointer ${lang === "de" ? "opacity-100" : "opacity-50"}`} />
            <img src="/images/flags/fr.png" onClick={() => setLang("fr")} className={`h-6 cursor-pointer ${lang === "fr" ? "opacity-100" : "opacity-50"}`} />
          </div>
        </div>
      )}
    </header>
  );
}

