import { motion } from "motion/react";

export default function HistoryPage({ t }: any) {
  return (
    <section className="w-full px-6 pt-7.5 pb-20 max-w-5xl mx-auto text-white">

      {/* LOGO */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-4 text-center"
      >
        <img
          src="/images/logo/lg02.png"
          alt="ROWE Logo"
          className="mx-auto mb-2 w-80 md:w-[320px]"
        />
      </motion.div>

      {/* TÍTULO */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-extrabold text-yellow-400 mb-10 text-left"
      >
        {t.history.title}
      </motion.h1>

      {/* SECÇÃO 1 */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-20"
      >
        <div className="flex flex-col md:flex-row items-start gap-8">

          <div className="md:w-1/2">
            <img
              src="/images/history/imagem01.png"
              alt="ROWE Racing"
              className="w-full rounded-lg shadow-lg mb-3"
            />
          </div>

          <div className="md:w-1/2">
            <p className="leading-relaxed text-xl text-white text-justify">
              {t.history.section1}
            </p>
          </div>

        </div>
      </motion.div>

      {/* SECÇÃO 2 */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-20"
      >
        <h2 className="text-3xl font-bold text-yellow-400 mb-6">
          {t.history.section2.title}
        </h2>

        <img
          src="/images/history/imagem02.png"
          alt="ROWE Racing"
          className="float-right ml-6 mb-4 w-72 rounded-lg shadow-lg"
        />

        <p className="leading-relaxed text-xl text-white text-justify">
          {t.history.section2.p}
        </p>

        <ul className="mt-4 space-y-2 text-xl text-white">
          {t.history.section2.list.map((item: string, i: number) => (
            <li key={i}>• {item}</li>
          ))}
        </ul>

        <p className="mt-4 text-[26px] text-white font-bold-italic text-justify">
          {t.history.section2.footer}
        </p>

        <div className="clear-both"></div>
      </motion.div>

      {/* SECÇÃO 3 */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-20"
      >
        <h2 className="text-3xl font-bold text-yellow-400 mb-6">
          {t.history.section3.title}
        </h2>

        <img
          src="/images/history/imagem03.png"
          alt="Indústria ROWE"
          className="float-left mr-6 mb-4 w-72 rounded-lg shadow-lg"
        />

        <p className="leading-relaxed text-xl text-white text-justify">
          {t.history.section3.p}
        </p>

        <ul className="mt-4 space-y-2 text-xl text-white">
          {t.history.section3.list.map((item: string, i: number) => (
            <li key={i}>• {item}</li>
          ))}
        </ul>

        <p className="mt-4 text-[24px] text-white font-bold-italic text-justify">
          {t.history.section3.footer}
        </p>

        <div className="clear-both"></div>
      </motion.div>

      {/* SECÇÃO 4 */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-20"
      >
        <h2 className="text-3xl font-bold text-yellow-300 mb-6">
          {t.history.section4.title}
        </h2>

        <div className="flex flex-col md:flex-row items-start gap-8">

          <div className="md:w-1/2">
            <p className="leading-relaxed text-xl text-white text-justify">
              {t.history.section4.p1}
            </p>

            <p className="leading-relaxed text-xl text-white text-justify mt-4">
              {t.history.section4.p2}
            </p>

            <p className="mt-4 text-[24px] text-white font-bold-italic text-justify">
              {t.history.section4.p3}
            </p>
          </div>

          <div className="md:w-1/2">
            <img
              src="/images/history/imagem04.png"
              alt="Fábrica ROWE"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

        </div>
      </motion.div>

      {/* CONCLUSÃO */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-20"
      >
        <p className="text-2xl md:text-3xl font-extrabold text-yellow-400 mb-8 text-center">
          {t.history.conclusion.title}
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          <img src="/images/logo/lg02.png" className="w-64 md:w-72" />
          <img src="/images/history/imagem05.png" className="h-75 object-contain" />
        </div>

        <p className="text-xl font-semibold text-yellow-300 text-center mt-10">
          {t.history.conclusion.footer}
        </p>
      </motion.div>

    </section>
  );
}
