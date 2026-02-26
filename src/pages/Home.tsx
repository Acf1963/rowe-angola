export default function Home({ t }) {
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
      <h1 className="text-4xl md:text-6xl font-extrabold text-white max-w-4xl">
        {t.hero.title}
      </h1>

      <p className="mt-6 text-lg md:text-xl text-white/90 max-w-3xl leading-relaxed">
        {t.hero.subtitle}
      </p>

      <div className="mt-8 flex gap-4 flex-wrap justify-center">
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
      </div>

      {/* LOGOS BMW / PORSCHE */}
      <div className="mt-10 flex flex-col items-center">
        <span className="text-xs uppercase tracking-widest text-yellow-400 mb-4">
          Homologações de fabricantes
        </span>

        <div className="flex items-center gap-12">
          <img
            src="/images/logo/bmw.png"
            alt="BMW"
            className="h-16 opacity-70 hover:opacity-100 transition"
          />

          <img
            src="/images/logo/porsche.png"
            alt="Porsche"
            className="h-16 opacity-70 hover:opacity-100 transition"
          />
        </div>
      </div>
    </section>
  );
}
