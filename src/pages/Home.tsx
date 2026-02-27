import { motion } from "motion/react";

export default function Home({ t }: any) {
  return (
    <section
      className="
        w-full
        h-full
        flex
        flex-col
        items-center
        justify-center
        text-center
        px-6
        pt-44
      "
    >
      {/* TÍTULO */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-extrabold text-white max-w-4xl"
      >
        {t.hero.title}
      </motion.h1>

      {/* SUBTÍTULO */}
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-6 text-lg md:text-xl text-white/90 max-w-3xl leading-relaxed"
      >
        {t.hero.subtitle}
      </motion.p>

      {/* BOTÕES */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mt-8 flex gap-4 flex-wrap justify-center"
      >
        <a
          href="/produtos"
          className="px-8 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition shadow-lg text-white"
        >
          {t.hero.cta}
        </a>

        <a
          href="https://www.rowe-oil.com/en/rowe-racing"
          target="_blank"
          className="px-8 py-3 bg-blue-900 hover:bg-blue-950 rounded-lg font-semibold transition shadow-lg text-white"
        >
          ROWE Racing
        </a>
      </motion.div>

      {/* HOMOLOGAÇÕES + LINHA ANIMADA */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="mt-10 flex flex-col items-center w-full"
      >
        <span className="text-xs uppercase tracking-widest text-yellow-400 mb-4">
          {t.hero.approvals}
        </span>

        {/* LINHA ANIMADA DE LOGOS */}
        <div className="relative w-full overflow-hidden py-2">
          <div className="flex items-center gap-16 animate-[scroll-logos_25s_linear_infinite] whitespace-nowrap">

            {/* BMW */}
            <img src="/images/logo/bmw.png" alt="BMW" className="h-18 opacity-70 hover:opacity-100 transition" />

            {/* Porsche */}
            <img src="/images/logo/porsche.png" alt="Porsche" className="h-14 opacity-70 hover:opacity-100 transition" />

            {/* Mercedes-Benz */}
            <img src="/images/logo/mercedes.png" alt="Mercedes-Benz" className="h-14 opacity-70 hover:opacity-100 transition" />

            {/* Volkswagen */}
            <img src="/images/logo/vw.png" alt="Volkswagen" className="h-18 opacity-70 hover:opacity-100 transition" />

            {/* Opel */}
            <img src="/images/logo/opel.png" alt="Opel" className="h-14 opacity-70 hover:opacity-100 transition" />

            {/* Ford */}
            <img src="/images/logo/ford.png" alt="Ford" className="h-28 opacity-70 hover:opacity-100 transition" />

            {/* DUPLICAÇÃO PARA LOOP INFINITO */}
            <img src="/images/logo/bmw.png" className="h-18 opacity-70 hover:opacity-100 transition" />
            <img src="/images/logo/porsche.png" className="h-14 opacity-70 hover:opacity-100 transition" />
            <img src="/images/logo/mercedes.png" className="h-14 opacity-70 hover:opacity-100 transition" />
            <img src="/images/logo/vw.png" className="h-18 opacity-70 hover:opacity-100 transition" />
            <img src="/images/logo/opel.png" className="h-14 opacity-70 hover:opacity-100 transition" />
            <img src="/images/logo/ford.png" className="h-28 opacity-70 hover:opacity-100 transition" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
