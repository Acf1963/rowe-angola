import { Link } from "react-router-dom";
import aoFlag from "@/assets/flags/ao.png";
import gbFlag from "@/assets/flags/gb.png";
import deFlag from "@/assets/flags/de.png";
import frFlag from "@/assets/flags/fr.png";

import logo from "@/assets/logo/lg02.png";

export default function Header({ lang, setLang }: any) {
  const languages = [
    { code: "ao", label: "AO", flag: aoFlag },
    { code: "gb", label: "EN", flag: gbFlag },
    { code: "de", label: "DE", flag: deFlag },
    { code: "fr", label: "FR", flag: frFlag },
  ];

  return (
    <header
      className="
        fixed top-0 left-0 w-full z-50
        backdrop-blur-md
        bg-black/30
        text-white
        py-4
      "
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">

        {/* LOGO + ANGOLA */}
        <div className="flex items-center gap-30">
          <img
            src={logo}
            alt="ROWE"
            className="
              h-10 w-auto object-contain
              scale-400
              origin-left
              brightness-125
              drop-shadow-[0_0_6px_rgba(0,0,0,0.6)]
            "
          />
          <span className="text-2xl font-bold text-yellow-400">
            ANGOLA
          </span>
        </div>


        {/* NAV */}
        <nav className="flex gap-6 text-base font-bold">
          <Link to="/" className="text-yellow-400 hover:text-yellow-300 transition">Início</Link>
          <Link to="/produtos" className="text-yellow-400 hover:text-yellow-300 transition">Produtos</Link>
          <Link to="/historia" className="text-yellow-400 hover:text-yellow-300 transition">História</Link>
          <Link to="/contacto" className="text-yellow-400 hover:text-yellow-300 transition">Contacto</Link>
        </nav>

        {/* FLAGS */}
        <div className="flex gap-3">
          {languages.map((langItem) => (
            <button
              key={langItem.code}
              onClick={() => setLang(langItem.code)}
              className={`border rounded p-1 ${
                lang === langItem.code ? "border-red-500" : "border-transparent"
              }`}
            >
              <img
                src={langItem.flag}
                alt={langItem.label}
                className="w-6 h-4 object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
