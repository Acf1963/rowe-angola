import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useMemo } from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import Home from "@/pages/Home";
import ProductsPage from "@/pages/Products";
import HistoryPage from "@/pages/History";
import ContactPage from "@/pages/Contact";

// ======================================================
//  SISTEMA DE TRADUÇÕES CENTRALIZADO E REFACTORIZADO
// ======================================================

const translations = {
  ao: {
    hero: {
      title: "A Paixão Alemã pela Performance agora em Angola",
      subtitle:
        "Lubrificantes HIGHTEC de última geração, desenhados para resistir ao calor extremo e proteger o seu motor nas condições mais exigentes.",
      cta: "Ver Catálogo",
    },

    products: {
      title: "Gama Angola",
      ligeiros: "Veículos Ligeiros",
      pesados: "Veículos Pesados",
      transmissions: "Transmissões",

      brakeFluid: "Óleo de Travões",
      brakeFluid_desc:
        "Fluido de travões de alta performance, compatível com sistemas DOT 3, DOT 4 e DOT 5.1.",
      brakeFluid_certs: ["DOT 4", "DOT 5.1", "FMVSS 116"],

      agricola: "Equipamentos Agrícolas",
      agricola_desc:
        "Lubrificantes e fluidos HIGHTEC para tratores e maquinaria agrícola, com elevada resistência a carga e poeiras.",
      agricola_certs: ["STOU", "UTTO", "John Deere J20C"],

      construcaoMineracao: "Construção, Mineração e Movimentação de Materiais",
      construcaoMineracao_desc:
        "Óleos e fluidos para equipamentos de construção e mineração, concebidos para ambientes severos e operação contínua.",
      construcaoMineracao_certs: ["Caterpillar TO‑4", "Allison C4"],
    },

    history: {
      title: "Tradição e Inovação",
      text:
        "Desde 1995, a ROWE tem sido sinónimo de qualidade premium 'Made in Germany'. " +
        "Com a nossa própria equipa de competição, a ROWE Racing, testamos os nossos limites no Nürburgring " +
        "para garantir que o seu veículo recebe tecnologia de pista na estrada.",
      carbon: "Produção Carbono Neutro",
    },

    contact: {
      title: "Fale Connosco",
      name: "Nome",
      email: "Email",
      subject: "Assunto",
      message: "Mensagem",
      send: "Enviar Mensagem",
      location: "Nossa Localização em Luanda",
    },
  },

  // ======================================================
  //  INGLÊS
  // ======================================================

  gb: {
    hero: {
      title: "German Passion for Performance now in Angola",
      subtitle:
        "Next‑generation HIGHTEC lubricants, designed to withstand extreme heat and protect your engine in the most demanding conditions.",
      cta: "View Catalog",
    },

    products: {
      title: "Angola Range",
      ligeiros: "Light Vehicles",
      pesados: "Heavy Vehicles",
      transmissions: "Transmissions",

      brakeFluid: "Brake Fluid",
      brakeFluid_desc:
        "High‑performance brake fluid compatible with DOT 3, DOT 4 and DOT 5.1 systems.",
      brakeFluid_certs: ["DOT 4", "DOT 5.1", "FMVSS 116"],

      agricola: "Agricultural Equipment",
      agricola_desc:
        "HIGHTEC lubricants and fluids for tractors and agricultural machinery, with high resistance to load and dust.",
      agricola_certs: ["STOU", "UTTO", "John Deere J20C"],

      construcaoMineracao: "Construction, Mining and Material Handling",
      construcaoMineracao_desc:
        "Oils and fluids for construction and mining equipment, designed for harsh environments and continuous operation.",
      construcaoMineracao_certs: ["Caterpillar TO‑4", "Allison C4"],
    },

    history: {
      title: "Tradition & Innovation",
      text:
        "Since 1995, ROWE has been synonymous with premium German quality. " +
        "With our own racing team, ROWE Racing, we push limits at the Nürburgring " +
        "to ensure your vehicle receives track‑proven technology.",
      carbon: "Carbon Neutral Production",
    },

    contact: {
      title: "Contact Us",
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      send: "Send Message",
      location: "Our Location in Luanda",
    },
  },

  // ======================================================
  //  ALEMÃO
  // ======================================================

  de: {
    hero: {
      title: "Deutsche Leidenschaft für Leistung jetzt in Angola",
      subtitle:
        "HIGHTEC‑Schmierstoffe der nächsten Generation, entwickelt für extreme Hitze und zum Schutz Ihres Motors unter anspruchsvollsten Bedingungen.",
      cta: "Katalog ansehen",
    },

    products: {
      title: "Angola Sortiment",
      ligeiros: "PKW",
      pesados: "LKW",
      transmissions: "Getriebe",

      brakeFluid: "Bremsflüssigkeit",
      brakeFluid_desc:
        "Hochleistungs‑Bremsflüssigkeit, kompatibel mit DOT 3, DOT 4 und DOT 5.1.",
      brakeFluid_certs: ["DOT 4", "DOT 5.1", "FMVSS 116"],

      agricola: "Landmaschinen",
      agricola_desc:
        "HIGHTEC‑Schmierstoffe und Flüssigkeiten für Traktoren und Landmaschinen, mit hoher Belastungs‑ und Staubresistenz.",
      agricola_certs: ["STOU", "UTTO", "John Deere J20C"],

      construcaoMineracao: "Bau, Bergbau und Materialtransport",
      construcaoMineracao_desc:
        "Öle und Flüssigkeiten für Bau‑ und Bergbaumaschinen, entwickelt für harte Umgebungen und Dauerbetrieb.",
      construcaoMineracao_certs: ["Caterpillar TO‑4", "Allison C4"],
    },

    history: {
      title: "Tradition & Innovation",
      text:
        "Seit 1995 steht ROWE für Premiumqualität 'Made in Germany'. " +
        "Mit unserem eigenen Rennteam, ROWE Racing, testen wir unsere Grenzen am Nürburgring, " +
        "um sicherzustellen, dass Ihr Fahrzeug Renntechnologie auf die Straße bringt.",
      carbon: "CO₂‑neutrale Produktion",
    },

    contact: {
      title: "Kontakt",
      name: "Name",
      email: "Email",
      subject: "Betreff",
      message: "Nachricht",
      send: "Nachricht Senden",
      location: "Unser Standort in Luanda",
    },
  },

  // ======================================================
  //  FRANCÊS
  // ======================================================

  fr: {
    hero: {
      title: "La Passion Allemande pour la Performance maintenant en Angola",
      subtitle:
        "Lubrifiants HIGHTEC de nouvelle génération, conçus pour résister à la chaleur extrême et protéger votre moteur dans les conditions les plus exigeantes.",
      cta: "Voir le Catalogue",
    },

    products: {
      title: "Gamme Angola",
      ligeiros: "Véhicules Légers",
      pesados: "Véhicules Lourds",
      transmissions: "Transmissions",

      brakeFluid: "Liquide de Freins",
      brakeFluid_desc:
        "Liquide de frein haute performance compatible avec les systèmes DOT 3, DOT 4 et DOT 5.1.",
      brakeFluid_certs: ["DOT 4", "DOT 5.1", "FMVSS 116"],

      agricola: "Équipements Agricoles",
      agricola_desc:
        "Lubrifiants et fluides HIGHTEC pour tracteurs et machines agricoles, avec haute résistance à la charge et à la poussière.",
      agricola_certs: ["STOU", "UTTO", "John Deere J20C"],

      construcaoMineracao: "Construction, Mines et Manutention",
      construcaoMineracao_desc:
        "Huiles et fluides pour équipements de construction et de mines, conçus pour des environnements sévères et un fonctionnement continu.",
      construcaoMineracao_certs: ["Caterpillar TO‑4", "Allison C4"],
    },

    history: {
      title: "Tradition & Innovation",
      text:
        "Depuis 1995, ROWE est synonyme de qualité premium allemande. " +
        "Avec notre propre équipe ROWE Racing, nous repoussons les limites au Nürburgring " +
        "pour garantir que votre véhicule bénéficie d’une technologie issue de la piste.",
      carbon: "Production Neutre en Carbone",
    },

    contact: {
      title: "Contactez‑Nous",
      name: "Nom",
      email: "Email",
      subject: "Sujet",
      message: "Message",
      send: "Envoyer le Message",
      location: "Notre Localisation à Luanda",
    },
  },
};

// ======================================================
//  COMPONENTE PRINCIPAL
// ======================================================

export default function App() {
  const [lang, setLang] = useState("ao");

  const t = useMemo(() => translations[lang], [lang]);

  return (
    <BrowserRouter>
      <div
        id="page-background"
        className="
          min-h-screen
          flex flex-col
          text-white
          bg-[#2d1f0c]
          bg-[radial-gradient(circle_at_35%_25%,rgba(255,220,100,0.70),rgba(180,120,40,0.60),rgba(30,20,10,1))]
        "
      >
        <Header lang={lang} setLang={setLang} />

        {/* MAIN OCUPA O ESPAÇO ENTRE HEADER E FOOTER */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home t={t} />} />
            <Route path="/produtos" element={<ProductsPage t={t} />} />
            <Route path="/historia" element={<HistoryPage t={t} />} />
            <Route path="/contacto" element={<ContactPage t={t} />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
