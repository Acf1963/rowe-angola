import { motion } from "motion/react";

export default function ProductsPage({ t }: any) {
  const categories = [
    {
      key: "ligeiros",
      label: t.products.ligeiros,
      img: "/images/products/ligeiros.webp",
      icon: (
        <svg className="w-10 h-10 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M3 13l2-5h14l2 5M5 13h14M7 17a2 2 0 110-4 2 2 0 010 4zm10 0a2 2 0 110-4 2 2 0 010 4z" />
        </svg>
      ),
      desc: "Lubrificantes HIGHTEC formulados para motores modernos, garantindo máxima proteção térmica e eficiência.",
      certs: ["API SP", "ACEA C3", "BMW LL‑04", "MB 229.52"]
    },

    {
      key: "pesados",
      label: t.products.pesados,
      img: "/images/products/pesados.png",
      icon: (
        <svg className="w-10 h-10 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M3 16V7h13v9M16 10h4l1 3v3h-5zM7 17a2 2 0 110-4 2 2 0 010 4zm10 0a2 2 0 110-4 2 2 0 010 4z" />
        </svg>
      ),
      desc: "Óleos de elevada resistência para motores diesel de carga, desenvolvidos para longos intervalos e condições severas.",
      certs: ["API CK‑4", "ACEA E9", "Volvo VDS‑4.5"]
    },

    {
      key: "transmissions",
      label: t.products.transmissions,
      img: "/images/products/transmissoes.webp",
      icon: (
        <svg className="w-10 h-10 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 4v2m0 12v2m8-8h-2M6 12H4m12.95 4.95l-1.41-1.41M8.46 8.46L7.05 7.05m9.9 0l-1.41 1.41M8.46 15.54l-1.41 1.41" />
        </svg>
      ),
      desc: "Fluidos de transmissão automáticos e manuais com estabilidade térmica superior e proteção anti‑desgaste.",
      certs: ["ATF Dexron VI", "ZF TE‑ML 11", "MB 236.14"]
    },

    {
      key: "brake-fluid",
      label: t.products.brakeFluid,
      img: "/images/products/travoes.webp",
      icon: (
        <svg className="w-10 h-10 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 2v4m0 12v4m-6-8h12M6 6l12 12" />
        </svg>
      ),
      desc: "Fluido de travões de alta performance, compatível com sistemas DOT 3, DOT 4 e DOT 5.1.",
      certs: ["DOT 4", "DOT 5.1", "FMVSS 116"]
    },

    {
      key: "agricola",
      label: t.products.agricola,
      img: "/images/products/eqp-agri.webp",
      icon: (
        <svg className="w-10 h-10 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M4 15h4l2-4 3 6h7" />
          <circle cx="7" cy="17" r="2" />
          <circle cx="17" cy="17" r="2" />
        </svg>
      ),
      desc: "Lubrificantes e fluidos HIGHTEC para tratores e maquinaria agrícola, com elevada resistência a carga e poeiras.",
      certs: ["STOU", "UTTO", "John Deere J20C"]
    },

    {
      key: "construcao-mineracao",
      label: t.products.construcaoMineracao,
      img: "/images/products/construcao-mineracao.webp",
      icon: (
        <svg className="w-10 h-10 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M3 17h18l-3-7h-5l-2-4H6z" />
          <circle cx="7" cy="18" r="2" />
          <circle cx="17" cy="18" r="2" />
        </svg>
      ),
      desc: "Óleos e fluidos para equipamentos de construção e mineração, concebidos para ambientes severos e operação contínua.",
      certs: ["Caterpillar TO‑4", "Allison C4"]
    }
  ];

  return (
    <section className="pt-24 pb-10 px-6 text-white overflow-hidden">

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold text-center text-yellow-400 drop-shadow-lg"
      >
        {t.products.title}
      </motion.h1>

      <div className="endless-container mt-10 overflow-hidden no-scrollbar">
        <div className="endless-track inline-flex whitespace-nowrap animate-[autoScroll_25s_linear_infinite]">

          {categories.map((cat) => (
            <div
              key={cat.key}
              className="card min-w-[280px] max-w-[280px] mx-3 p-4 rounded-xl bg-black/40 backdrop-blur-sm border border-yellow-400/30 hover:border-yellow-400/60 hover:shadow-[0_0_20px_rgba(255,200,80,0.25)] transition-all duration-300 whitespace-normal break-words"
            >
            <div className="flex justify-center mb-2">{cat.icon}</div>

            <img
              src={cat.img}
              alt={cat.label}
              className="w-full h-28 object-contain rounded-lg mb-2 border border-white/10"
            />

            <h2 className="text-xl font-bold text-yellow-400 mb-2 text-center">
              {cat.label}
            </h2>

            <p className="text-xs opacity-80 leading-relaxed text-center mb-2">
              {cat.desc}
            </p>

            <div className="flex flex-wrap justify-center gap-1 mb-2">
              {cat.certs.map((cert) => (
                <div
                  key={cert}
                  className="px-3 py-1 rounded-full border border-yellow-400 bg-black/40 backdrop-blur-sm"
                >
                  <span className="text-yellow-400 text-[10px] tracking-widest font-semibold">
                    {cert}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <a
                href={`/produtos/${cat.key}`}
                className="inline-block mt-1 px-5 py-2 rounded bg-red-600 hover:bg-red-700 transition font-semibold text-sm"
              >
                Ver Produtos
              </a>
            </div>
          </div>
          ))}

        </div>
      </div>
    </section>
  );
}
