import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useMemo } from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

import Home from "@/pages/Home";
import ProductsPage from "@/pages/Products";
import HistoryPage from "@/pages/History";
import ContactPage from "@/pages/Contact";

// ======================================================
//  SISTEMA DE TRADUÇÕES COMPLETO
// ======================================================

const translations = {
  ao: {
    hero: {
      title: "O Perfeccionismo Alemão pela Performance agora em Angola",
      subtitle:
        "Lubrificantes HIGHTEC de última geração, desenhados para resistir ao calor extremo e proteger o seu motor nas condições mais exigentes.",
      cta: "Ver Catálogo",
      approvals: "Homologações Oficiais",
    },

    products: {
      title: "Gama Angola",
      ligeiros: "Veículos Ligeiros",
      ligeiros_desc:
        "Lubrificantes HIGHTEC formulados para motores modernos, garantindo máxima proteção térmica e eficiência.",
      ligeiros_certs: ["API SP", "ACEA C3", "BMW LL‑04", "MB 229.52"],

      pesados: "Veículos Pesados",
      pesados_desc:
        "Óleos de elevada resistência para motores diesel de carga, desenvolvidos para longos intervalos e condições severas.",
      pesados_certs: ["API CK‑4", "ACEA E9", "Volvo VDS‑4.5"],

      transmissions: "Transmissões",
      transmissions_desc:
        "Fluidos automáticos e manuais com estabilidade térmica superior.",
      transmissions_certs: ["ATF Dexron VI", "ZF TE‑ML 11", "MB 236.14"],

      brakeFluid: "Óleo de Travões",
      brakeFluid_desc:
        "Fluido de travões de alta performance compatível com DOT 3, DOT 4 e DOT 5.1.",
      brakeFluid_certs: ["DOT 4", "DOT 5.1", "FMVSS 116"],

      agricola: "Equipamentos Agrícolas",
      agricola_desc:
        "Lubrificantes e fluidos HIGHTEC para maquinaria agrícola.",
      agricola_certs: ["STOU", "UTTO", "John Deere J20C"],

      construcaoMineracao: "Construção e Mineração",
      construcaoMineracao_desc:
        "Óleos e fluidos para ambientes severos e operação contínua.",
      construcaoMineracao_certs: ["Caterpillar TO‑4", "Allison C4"],
    },

    history: {
      title: "Histórico da ROWE – Engenharia Alemã ao Serviço da Performance",
      section1:
        "A ROWE nasceu na Alemanha com a ambição de redefinir performance, durabilidade e engenharia aplicada ao mundo real.",
      section2: {
        title: "Desportos Motorizados",
        p: "A presença da ROWE no desporto motorizado é um laboratório vivo.",
        list: [
          "ROWE Racing como equipa de referência",
          "24 Horas de Nürburgring e Spa",
          "Lubrificantes testados em condições extremas",
          "Tecnologia da pista para o consumidor",
        ],
        footer: "Se resiste na pista, supera qualquer estrada.",
      },
      section3: {
        title: "Presença Industrial",
        p: "A ROWE está presente em setores essenciais da economia global.",
        list: [
          "Ligeiros e pesados",
          "Equipamentos industriais",
          "Máquinas agrícolas",
          "Construção e mineração",
          "Sistemas hidráulicos",
        ],
        footer:
          "Eficiência energética, proteção avançada e durabilidade comprovada.",
      },
      section4: {
        title: "Sustentabilidade e Inovação",
        p1: "Produção neutra em carbono e aditivos de última geração.",
        p2: "Benefícios diretos para Angola e África.",
        p3: "Tecnologia sustentável adaptada ao terreno africano.",
      },
      conclusion: {
        title: "ROWE chega a Angola com ADN de performance.",
        footer: "Energia para mover Angola.",
      },
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
  //  ENGLISH
  // ======================================================

  gb: {
    hero: {
      title: "German Perfectionism for Performance, now in Angola",
      subtitle:
        "Next‑generation HIGHTEC lubricants designed to withstand extreme heat.",
      cta: "View Catalog",
      approvals: "Official Approvals",
    },

    products: {
      title: "Angola Range",
      ligeiros: "Light Vehicles",
      ligeiros_desc:
        "HIGHTEC lubricants for modern engines with maximum thermal protection.",
      ligeiros_certs: ["API SP", "ACEA C3", "BMW LL‑04", "MB 229.52"],

      pesados: "Heavy Vehicles",
      pesados_desc:
        "High‑resistance oils for heavy‑duty diesel engines.",
      pesados_certs: ["API CK‑4", "ACEA E9", "Volvo VDS‑4.5"],

      transmissions: "Transmissions",
      transmissions_desc:
        "Automatic and manual transmission fluids with superior stability.",
      transmissions_certs: ["ATF Dexron VI", "ZF TE‑ML 11", "MB 236.14"],

      brakeFluid: "Brake Fluid",
      brakeFluid_desc:
        "High‑performance brake fluid compatible with DOT 3/4/5.1.",
      brakeFluid_certs: ["DOT 4", "DOT 5.1", "FMVSS 116"],

      agricola: "Agricultural Equipment",
      agricola_desc:
        "Lubricants and fluids for tractors and agricultural machinery.",
      agricola_certs: ["STOU", "UTTO", "John Deere J20C"],

      construcaoMineracao: "Construction & Mining",
      construcaoMineracao_desc:
        "Fluids designed for harsh environments and continuous operation.",
      construcaoMineracao_certs: ["Caterpillar TO‑4", "Allison C4"],
    },

    history: {
      title: "ROWE History – German Engineering Serving Performance",
      section1:
        "ROWE was born in Germany with the ambition to redefine performance.",
      section2: {
        title: "Motorsport",
        list: [
          "ROWE Racing as a leading endurance team",
          "24 Hours of Nürburgring and Spa",
          "Extreme‑condition lubricant development",
          "Technology transfer from track to consumer",
        ],
        footer: "If it survives on the track, it excels on the road.",
      },
      section3: {
        title: "Industrial Presence",
        list: [
          "Light and heavy vehicles",
          "Industrial equipment",
          "Agricultural machinery",
          "Construction and mining",
          "Hydraulic systems",
        ],
        footer: "Efficiency, protection and durability.",
      },
      section4: {
        title: "Sustainability & Innovation",
        p1: "Carbon‑neutral production and advanced additives.",
        p2: "Direct benefits for Angola and Africa.",
        p3: "Sustainable technology adapted to African terrain.",
      },
      conclusion: {
        title: "ROWE arrives in Angola with performance DNA.",
        footer: "Energy to move Angola.",
      },
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
  //  GERMAN
  // ======================================================

  de: {
    hero: {
      title: "Deutsche Perfektion für Performance, jetzt in Angola",
      subtitle:
        "HIGHTEC‑Schmierstoffe der nächsten Generation für extreme Bedingungen.",
      cta: "Katalog ansehen",
      approvals: "Offizielle Freigaben",
    },

    products: {
      title: "Angola Sortiment",
      ligeiros: "PKW",
      ligeiros_desc:
        "HIGHTEC‑Schmierstoffe für moderne Motoren mit maximalem Schutz.",
      ligeiros_certs: ["API SP", "ACEA C3", "BMW LL‑04", "MB 229.52"],

      pesados: "LKW",
      pesados_desc:
        "Hochbeständige Öle für schwere Dieselmotoren.",
      pesados_certs: ["API CK‑4", "ACEA E9", "Volvo VDS‑4.5"],

      transmissions: "Getriebe",
      transmissions_desc:
        "Automatik‑ und Schaltgetriebeöle mit hoher Stabilität.",
      transmissions_certs: ["ATF Dexron VI", "ZF TE‑ML 11", "MB 236.14"],

      brakeFluid: "Bremsflüssigkeit",
      brakeFluid_desc:
        "Hochleistungs‑Bremsflüssigkeit kompatibel mit DOT 3/4/5.1.",
      brakeFluid_certs: ["DOT 4", "DOT 5.1", "FMVSS 116"],

      agricola: "Landmaschinen",
      agricola_desc:
        "Schmierstoffe und Flüssigkeiten für landwirtschaftliche Maschinen.",
      agricola_certs: ["STOU", "UTTO", "John Deere J20C"],

      construcaoMineracao: "Bau & Bergbau",
      construcaoMineracao_desc:
        "Flüssigkeiten für harte Umgebungen und Dauerbetrieb.",
      construcaoMineracao_certs: ["Caterpillar TO‑4", "Allison C4"],
    },

    history: {
      title:
        "ROWE Geschichte – Deutsche Ingenieurskunst für höchste Performance",
      section1:
        "ROWE wurde gegründet, um Leistung und Haltbarkeit neu zu definieren.",
      section2: {
        title: "Motorsport",
        list: [
          "ROWE Racing als führendes Team",
          "24 Stunden Nürburgring und Spa",
          "Tests unter Extrembedingungen",
          "Technologie von der Rennstrecke",
        ],
        footer: "Was auf der Strecke besteht, meistert jede Straße.",
      },
      section3: {
        title: "Industrielle Präsenz",
        list: [
          "PKW und LKW",
          "Industrielle Ausrüstung",
          "Landmaschinen",
          "Bau und Bergbau",
          "Hydrauliksysteme",
        ],
        footer: "Effizienz, Schutz und Haltbarkeit.",
      },
      section4: {
        title: "Nachhaltigkeit & Innovation",
        p1: "CO₂‑neutrale Produktion und moderne Additive.",
        p2: "Direkte Vorteile für Afrika.",
        p3: "Technologie für extreme Bedingungen.",
      },
      conclusion: {
        title: "ROWE kommt nach Angola mit Performance‑DNA.",
        footer: "Energie für Angola.",
      },
    },

    contact: {
      title: "Kontakt",
      name: "Name",
      email: "Email",
      subject: "Betreff",
      message: "Nachricht",
      send: "Nachricht senden",
      location: "Unser Standort in Luanda",
    },
  },

  // ======================================================
  //  FRENCH
  // ======================================================

  fr: {
    hero: {
      title:
        "Le Perfectionnisme Allemand pour la Performance maintenant en Angola",
      subtitle:
        "Lubrifiants HIGHTEC conçus pour résister à la chaleur extrême.",
      cta: "Voir le Catalogue",
      approvals: "Homologations Officielles",
    },

    products: {
      title: "Gamme Angola",
      ligeiros: "Véhicules Légers",
      ligeiros_desc:
        "Lubrifiants HIGHTEC pour moteurs modernes.",
      ligeiros_certs: ["API SP", "ACEA C3", "BMW LL‑04", "MB 229.52"],

      pesados: "Véhicules Lourds",
      pesados_desc:
        "Huiles haute résistance pour moteurs diesel lourds.",
      pesados_certs: ["API CK‑4", "ACEA E9", "Volvo VDS‑4.5"],

      transmissions: "Transmissions",
      transmissions_desc:
        "Fluides automatiques et manuels haute stabilité.",
      transmissions_certs: ["ATF Dexron VI", "ZF TE‑ML 11", "MB 236.14"],

      brakeFluid: "Liquide de Freins",
      brakeFluid_desc:
        "Liquide haute performance compatible DOT 3/4/5.1.",
      brakeFluid_certs: ["DOT 4", "DOT 5.1", "FMVSS 116"],

      agricola: "Équipements Agricoles",
      agricola_desc:
        "Lubrifiants pour tracteurs et machines agricoles.",
      agricola_certs: ["STOU", "UTTO", "John Deere J20C"],

      construcaoMineracao: "Construction & Mines",
      construcaoMineracao_desc:
        "Fluides pour environnements sévères.",
      construcaoMineracao_certs: ["Caterpillar TO‑4", "Allison C4"],
    },

    history: {
      title:
        "Histoire de ROWE – Ingénierie Allemande au Service de la Performance",
      section1:
        "ROWE est née en Allemagne pour redéfinir la performance.",
      section2: {
        title: "Sports mécaniques",
        list: [
          "ROWE Racing en endurance",
          "24 Heures du Nürburgring et Spa",
          "Tests en conditions extrêmes",
          "Technologie piste‑vers‑route",
        ],
        footer:
          "Ce qui résiste sur la piste surmonte la route.",
      },
      section3: {
        title: "Présence Industrielle",
        list: [
          "Véhicules légers et lourds",
          "Équipements industriels",
          "Machines agricoles",
          "Construction et mines",
          "Systèmes hydrauliques",
        ],
        footer:
          "Efficacité, protection et durabilité.",
      },
      section4: {
        title: "Durabilité & Innovation",
        p1: "Production neutre en carbone.",
        p2: "Avantages directs pour l’Afrique.",
        p3: "Technologie adaptée aux conditions extrêmes.",
      },
      conclusion: {
        title: "ROWE arrive en Angola avec ADN de performance.",
        footer: "Énergie pour faire avancer l’Angola.",
      },
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
  const [lang, setLang] = useState<keyof typeof translations>("ao");

  const t = useMemo(() => translations[lang], [lang]);

  return (
    <BrowserRouter>
      <ScrollToTop />

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

        <main className="flex-1 mt-15 sm:mt-20">
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
