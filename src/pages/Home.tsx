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
        pt-46
      "
    >
      <h1 className="text-4xl md:text-6xl font-extrabold text-white max-w-4xl">
        {t.hero.title}
      </h1>

      <p className="mt-6 text-lg md:text-xl text-white/90 max-w-3xl leading-relaxed">
        {t.hero.subtitle}
      </p>

      <div className="mt-10 flex gap-4 flex-wrap justify-center">
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
    </section>
  );
}
