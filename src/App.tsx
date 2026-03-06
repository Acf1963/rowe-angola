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
//  SISTEMA DE TRADUÇÕES COMPLETO E HARMONIZADO
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
        "Fluidos de transmissão automáticos e manuais com estabilidade térmica superior e proteção anti‑desgaste.",
      transmissions_certs: ["ATF Dexron VI", "ZF TE‑ML 11", "MB 236.14"],

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
      title: "Histórico da ROWE – Engenharia Alemã ao Serviço da Alta Performance",

      section1:
        "A ROWE nasceu na Alemanha com a ambição de redefinir o que significa performance, durabilidade e engenharia aplicada ao mundo real. Desde o início, a marca assumiu um compromisso inegociável: não basta cumprir normas — é preciso superá‑las. Com laboratórios próprios, investigação contínua e controlo total sobre a produção, a ROWE tornou‑se uma referência global em setores onde a fiabilidade é crítica.",

      section2: {
        title: "Desportos Motorizados – Onde a ROWE Prova o Que Vale",
        p: "A presença da ROWE nos desportos motorizados é mais do que patrocínio: é um laboratório vivo. A marca está profundamente envolvida em competições onde cada segundo conta e onde a fiabilidade decide campeonatos.",
        list: [
          "ROWE Racing como equipa de referência no endurance europeu",
          "Participação nas 24 Horas de Nürburgring e Spa",
          "Desenvolvimento de lubrificantes testados em condições extremas",
          "Transferência direta de tecnologia da pista para o consumidor"
        ],
        footer: "Se resiste na pista, supera qualquer desafio na estrada."
      },

      section3: {
        title: "Presença Industrial e Mobilidade Global",
        p: "Para além do desporto, a ROWE está presente em setores essenciais da economia global:",
        list: [
          "Automóveis ligeiros e pesados",
          "Equipamentos industriais",
          "Máquinas agrícolas",
          "Construção e mineração",
          "Sistemas hidráulicos e aplicações especiais"
        ],
        footer:
          "A marca tornou‑se sinónimo de eficiência energética, proteção avançada contra desgaste e durabilidade em ambientes severos."
      },

      section4: {
        title: "Sustentabilidade e Inovação",
        p1:
          "A ROWE investe fortemente em produção neutra em carbono, reciclagem avançada e redução contínua de emissões, desenvolvendo lubrificantes de nova geração que combinam alta performance, proteção superior e eficiência energética real. Cada produto é formulado com aditivos de última geração e processos de engenharia alemã que garantem maior durabilidade, menor desgaste e excelente estabilidade térmica, mesmo em condições extremas.",
        p2:
          "Para Angola e África, estes avanços traduzem‑se em benefícios diretos: motores que duram mais, menor consumo de combustível, intervalos de manutenção mais longos e maior fiabilidade em ambientes de calor intenso, poeira e operações severas. É tecnologia sustentável aplicada ao terreno africano, reduzindo custos operacionais e aumentando a produtividade de veículos, frotas e maquinaria pesada.",
        p3:
          "Uma marca global com responsabilidade local — preparada para impulsionar o futuro energético e industrial do continente."
      },

      conclusion: {
        title:
          "A ROWE chega a Angola com o mesmo ADN que a tornou uma referência global: engenharia alemã de alta performance, inovação contínua e compromisso absoluto com a fiabilidade em qualquer ambiente.",
        footer: "Energia para mover Angola. Tecnologia para impulsionar África."
      }
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

  gb: {
    hero: {
      title: "German Perfectionism for Performance, now in Angola",
      subtitle:
        "Next‑generation HIGHTEC lubricants, designed to withstand extreme heat and protect your engine in the most demanding conditions.",
      cta: "View Catalog",
      approvals: "Official Approvals",
    },

    products: {
      title: "Angola Range",

      ligeiros: "Light Vehicles",
      ligeiros_desc:
        "HIGHTEC lubricants formulated for modern engines, ensuring maximum thermal protection and efficiency.",
      ligeiros_certs: ["API SP", "ACEA C3", "BMW LL‑04", "MB 229.52"],

      pesados: "Heavy Vehicles",
      pesados_desc:
        "High‑resistance oils for heavy‑duty diesel engines, developed for long intervals and severe operating conditions.",
      pesados_certs: ["API CK‑4", "ACEA E9", "Volvo VDS‑4.5"],

      transmissions: "Transmissions",
      transmissions_desc:
        "Automatic and manual transmission fluids with superior thermal stability and anti‑wear protection.",
      transmissions_certs: ["ATF Dexron VI", "ZF TE‑ML 11", "MB 236.14"],

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
      title: "ROWE History – German Engineering Serving High Performance",

      section1: "ROWE was born in Germany with the ambition to redefine what performance, durability and real‑world engineering truly mean. From the beginning, the brand embraced a non‑negotiable commitment: meeting standards is not enough — they must be exceeded. With in‑house laboratories, continuous research and full control over production, ROWE has become a global reference in sectors where reliability is critical.",

      section2: {
        title: "Motorsport – Where ROWE Proves Its Worth",
        list: [
          "ROWE Racing as a leading endurance team in Europe",
          "Participation in the 24 Hours of Nürburgring and Spa",
          "Development of lubricants tested under extreme conditions",
          "Direct transfer of technology from the track to the consumer"
        ],
        footer: "If it survives on the track, it overcomes any challenge on the road."
      },

      section3: {
        title: "Industrial Presence and Global Mobility",
        list: [
          "Light and heavy vehicles",
          "Industrial equipment",
          "Agricultural machinery",
          "Construction and mining",
          "Hydraulic systems and special applications"
        ],
        footer: "The brand has become synonymous with energy efficiency, advanced wear protection and durability in severe environments."
      },

      section4: {
        title: "Sustainability and Innovation",
        p1: "ROWE invests heavily in carbon‑neutral production, advanced recycling and continuous emission reduction, developing next‑generation lubricants that combine high performance, superior protection and real energy efficiency. Each product is formulated with state‑of‑the‑art additives and German engineering processes that ensure greater durability, reduced wear and excellent thermal stability, even under extreme conditions.",
        p2: "For Angola and Africa, these advances translate into direct benefits: longer‑lasting engines, lower fuel consumption, extended maintenance intervals and greater reliability in heat, dust and severe operating conditions. It is sustainable technology adapted to African terrain, reducing operational costs and increasing the productivity of vehicles, fleets and heavy machinery.",
        p3: "A global brand with local responsibility — ready to drive the energy and industrial future of the continent."
      },

      conclusion: {
        title: "ROWE arrives in Angola with the same DNA that made it a global reference: German high‑performance engineering, continuous innovation and absolute commitment to reliability in any environment.",
        footer: "Energy to move Angola. Technology to empower Africa."
      }
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

  de: {
    hero: {
      title: "Deutsche Perfektion für Performance, jetzt in Angola",
      subtitle:
        "HIGHTEC‑Schmierstoffe der nächsten Generation, entwickelt für extreme Hitze und zum Schutz Ihres Motors unter anspruchsvollsten Bedingungen.",
      cta: "Katalog ansehen",
      approvals: "Offizielle Freigaben",
    },

    products: {
      title: "Angola Sortiment",

      ligeiros: "PKW",
      ligeiros_desc:
        "HIGHTEC‑Schmierstoffe für moderne Motoren, die maximalen thermischen Schutz und Effizienz gewährleisten.",
      ligeiros_certs: ["API SP", "ACEA C3", "BMW LL‑04", "MB 229.52"],

      pesados: "LKW",
      pesados_desc:
        "Hochbeständige Öle für schwere Dieselmotoren, entwickelt für lange Intervalle und harte Einsatzbedingungen.",
      pesados_certs: ["API CK‑4", "ACEA E9", "Volvo VDS‑4.5"],

      transmissions: "Getriebe",
      transmissions_desc:
        "Automatik‑ und Schaltgetriebeöle mit hoher thermischer Stabilität und Verschleißschutz.",
      transmissions_certs: ["ATF Dexron VI", "ZF TE‑ML 11", "MB 236.14"],

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
      title: "ROWE Geschichte – Deutsche Ingenieurskunst im Dienst höchster Performance",

      section1: "ROWE wurde in Deutschland mit dem Anspruch gegründet, die Bedeutung von Leistung, Haltbarkeit und praxisorientierter Ingenieurtechnik neu zu definieren. Von Anfang an verfolgte die Marke ein unverrückbares Prinzip: Normen zu erfüllen reicht nicht — man muss sie übertreffen. Mit eigenen Laboren, kontinuierlicher Forschung und vollständiger Produktionskontrolle wurde ROWE zu einer globalen Referenz in Bereichen, in denen Zuverlässigkeit entscheidend ist.",

      section2: {
        title: "Motorsport – Wo ROWE beweist, was es wert ist",
        list: [
          "ROWE Racing als führendes Langstreckenteam in Europa",
          "Teilnahme an den 24 Stunden von Nürburgring und Spa",
          "Entwicklung von Schmierstoffen, die unter Extrembedingungen getestet werden",
          "Direkte Technologieübertragung von der Rennstrecke zum Verbraucher"
        ],
        footer: "Was auf der Rennstrecke besteht, meistert jede Herausforderung auf der Straße."
      },

      section3: {
        title: "Industrielle Präsenz und globale Mobilität",
        list: [
          "Leichte und schwere Fahrzeuge",
          "Industrielle Ausrüstung",
          "Landmaschinen",
          "Bau und Bergbau",
          "Hydrauliksysteme und Spezialanwendungen"
        ],
        footer: "Die Marke ist zum Synonym für Energieeffizienz, fortschrittlichen Verschleißschutz und Haltbarkeit in anspruchsvollen Umgebungen geworden."
      },

      section4: {
        title: "Nachhaltigkeit und Innovation",
        p1: "ROWE investiert stark in CO₂‑neutrale Produktion, fortschrittliches Recycling und kontinuierliche Emissionsreduzierung und entwickelt Schmierstoffe der neuen Generation, die hohe Leistung, überlegenen Schutz und echte Energieeffizienz vereinen. Jedes Produkt wird mit modernsten Additiven und deutscher Ingenieurtechnik formuliert, um höhere Haltbarkeit, geringeren Verschleiß und hervorragende thermische Stabilität selbst unter extremen Bedingungen zu gewährleisten.",
        p2: "Für Angola und Afrika bedeuten diese Fortschritte direkte Vorteile: langlebigere Motoren, geringerer Kraftstoffverbrauch, längere Wartungsintervalle und höhere Zuverlässigkeit bei Hitze, Staub und harten Einsatzbedingungen. Es ist nachhaltige Technologie, angepasst an afrikanische Gegebenheiten, die Betriebskosten senkt und die Produktivität von Fahrzeugen, Flotten und schweren Maschinen erhöht.",
        p3: "Eine globale Marke mit lokaler Verantwortung — bereit, die Energie‑ und Industrieentwicklung des Kontinents voranzutreiben."
      },

      conclusion: {
        title: "ROWE kommt nach Angola mit derselben DNA, die sie weltweit bekannt gemacht hat: deutsche Hochleistungsingenieurkunst, kontinuierliche Innovation und kompromisslose Zuverlässigkeit in jeder Umgebung.",
        footer: "Energie für Angola. Technologie für Afrika."
      }
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

  fr: {
    hero: {
      title: "Le Perfectionnisme Allemand pour la Performance maintenant en Angola",
      subtitle:
        "Lubrifiants HIGHTEC de nouvelle génération, conçus pour résister à la chaleur extrême et protéger votre moteur dans les conditions les plus exigeantes.",
      cta: "Voir le Catalogue",
      approvals: "Homologations Officielles",
    },

    products: {
      title: "Gamme Angola",

      ligeiros: "Véhicules Légers",
      ligeiros_desc:
        "Lubrifiants HIGHTEC formulés pour les moteurs modernes, garantissant une protection thermique maximale et une efficacité optimale.",
      ligeiros_certs: ["API SP", "ACEA C3", "BMW LL‑04", "MB 229.52"],

      pesados: "Véhicules Lourds",
      pesados_desc:
        "Huiles haute résistance pour moteurs diesel lourds, conçues pour de longs intervalles et des conditions sévères.",
      pesados_certs: ["API CK‑4", "ACEA E9", "Volvo VDS‑4.5"],

      transmissions: "Transmissions",
      transmissions_desc:
        "Fluides de transmission automatiques et manuels offrant une stabilité thermique supérieure et une protection anti‑usure.",
      transmissions_certs: ["ATF Dexron VI", "ZF TE‑ML 11", "MB 236.14"],

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
      title: "Histoire de ROWE – L’ingénierie allemande au service de la haute performance",

      section1: "ROWE est née en Allemagne avec l’ambition de redéfinir ce que signifient réellement performance, durabilité et ingénierie appliquée au monde réel. Dès le début, la marque a adopté un principe non négociable : respecter les normes ne suffit pas — il faut les dépasser. Avec ses propres laboratoires, une recherche continue et un contrôle total de la production, ROWE est devenue une référence mondiale dans les secteurs où la fiabilité est essentielle.",

      section2: {
        title: "Sports mécaniques – Là où ROWE prouve sa valeur",
        list: [
          "ROWE Racing comme équipe de référence en endurance européenne",
          "Participation aux 24 Heures du Nürburgring et de Spa",
          "Développement de lubrifiants testés dans des conditions extrêmes",
          "Transfert direct de technologie de la piste au consommateur"
        ],
        footer: "Ce qui résiste sur la piste surmonte tous les défis sur la route."
      },

      section3: {
        title: "Présence industrielle et mobilité mondiale",
        list: [
          "Véhicules légers et lourds",
          "Équipements industriels",
          "Machines agricoles",
          "Construction et exploitation minière",
          "Systèmes hydrauliques et applications spéciales"
        ],
        footer: "La marque est devenue synonyme d’efficacité énergétique, de protection avancée contre l’usure et de durabilité dans des environnements sévères."
      },

      section4: {
        title: "Durabilité et innovation",
        p1: "ROWE investit massivement dans une production neutre en carbone, le recyclage avancé et la réduction continue des émissions, développant des lubrifiants de nouvelle génération alliant haute performance, protection supérieure et réelle efficacité énergétique. Chaque produit est formulé avec des additifs de pointe et des procédés d’ingénierie allemands garantissant une durabilité accrue, une usure réduite et une excellente stabilité thermique, même dans des conditions extrêmes.",
        p2: "Pour l’Angola et l’Afrique, ces avancées se traduisent par des bénéfices directs : moteurs plus durables, consommation réduite, intervalles de maintenance prolongés et fiabilité accrue face à la chaleur, à la poussière et aux conditions sévères. Une technologie durable adaptée au terrain africain, réduisant les coûts opérationnels et augmentant la productivité des véhicules, des flottes et des machines lourdes.",
        p3: "Une marque mondiale avec une responsabilité locale — prête à impulser l’avenir énergétique et industriel du continent."
      },

      conclusion: {
        title: "ROWE arrive en Angola avec le même ADN qui en a fait une référence mondiale : ingénierie allemande haute performance, innovation continue et engagement absolu envers la fiabilité dans tous les environnements.",
        footer: "L’énergie pour faire avancer l’Angola. La technologie pour propulser l’Afrique."
      }
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

        <main className="flex-1 mt-[60px] sm:mt-[80px]">
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
