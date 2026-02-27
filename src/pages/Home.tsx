import { motion } from "motion/react";
import { Link } from "react-router-dom";

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
        pt-[120px]
      "
    >
      {/* TÍTULO */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white max-w-4xl italic"
      >
        {t.hero.title}
      </motion.h1>

      {/* SUBTÍTULO */}
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-6 text-lg md:text-xl text-white/90 max-w-3xl leading-relaxed italic"
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
        <Link
          to="/produtos"
          className="px-8 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition shadow-lg text-white"
        >
          {t.hero.cta}
        </Link>

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

        {/* CARROSSEL DE LOGOS */}
        <div className="relative w-full overflow-hidden py-2">
          <div className="flex animate-scroll-logos whitespace-nowrap">

            {/* BLOCO 1 */}
            <div className="flex items-center shrink-0">
              <img src="/images/logo/ford.png" className="h-24 object-contain mx-12 opacity-70 hover:opacity-100 transition" />
              <img src="/images/logo/bmw.png" className="h-16 object-contain mx-16 opacity-70 hover:opacity-100 transition" />
              <img src="/images/logo/porsche.png" className="h-16 object-contain mx-16 opacity-70 hover:opacity-100 transition" />
              <img src="/images/logo/mercedes.png" className="h-16 object-contain mx-20 opacity-70 hover:opacity-100 transition" />
              <img src="/images/logo/vw.png" className="h-16 object-contain mx-16 opacity-70 hover:opacity-100 transition" />
              <img src="/images/logo/opel.png" className="h-16 object-contain mx-20 opacity-70 hover:opacity-100 transition" />
            </div>

            {/* BLOCO 2 */}
            <div className="flex items-center shrink-0">
              <img src="/images/logo/ford.png" className="h-24 object-contain mx-12 opacity-70 hover:opacity-100 transition" />
              <img src="/images/logo/bmw.png" className="h-16 object-contain mx-16 opacity-70 hover:opacity-100 transition" />
              <img src="/images/logo/porsche.png" className="h-16 object-contain mx-16 opacity-70 hover:opacity-100 transition" />
              <img src="/images/logo/mercedes.png" className="h-16 object-contain mx-20 opacity-70 hover:opacity-100 transition" />
              <img src="/images/logo/vw.png" className="h-16 object-contain mx-16 opacity-70 hover:opacity-100 transition" />
              <img src="/images/logo/opel.png" className="h-16 object-contain mx-20 opacity-70 hover:opacity-100 transition" />
            </div>

          </div>
        </div>
      </motion.div>
    </section>
  );
}
