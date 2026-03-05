import { motion } from "motion/react";

export default function HistoryPage({ t }: any) {
  return (
    <section className="w-full px-6 pt-[30px] pb-20 max-w-5xl mx-auto text-white">

      {/* SECÇÃO — ENERGIA PARA MOVER ANGOLA */}
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

      {/* TÍTULO À ESQUERDA */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-extrabold text-yellow-400 mb-10 text-left"
      >
        Histórico da ROWE – Engenharia Alemã ao Serviço da Alta Performance
      </motion.h1>

      {/* BLOCO IMAGEM01 ESQUERDA + TEXTO DIREITA */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-20"
      >
        <div className="flex flex-col md:flex-row items-start gap-8">

          {/* IMAGEM À ESQUERDA */}
          <div className="md:w-1/2">
            <img
              src="/images/history/imagem01.png"
              alt="ROWE Racing em pista"
              className="w-full rounded-lg shadow-lg mb-3"
            />
            <p className="text-sm text-white/70">
              Imagem 1 – ROWE Racing em pista
            </p>
          </div>

          {/* TEXTO À DIREITA */}
          <div className="md:w-1/2">
            <p className="leading-relaxed text-lg text-white/90 text-justify">
              A ROWE nasceu na Alemanha com a ambição de redefinir o que significa
              performance, durabilidade e engenharia aplicada ao mundo real. Desde o
              início, a marca assumiu um compromisso inegociável: <strong>não basta
              cumprir normas — é preciso superá‑las</strong>. Com laboratórios
              próprios, investigação contínua e controlo total sobre a produção, a
              ROWE tornou‑se uma referência global em setores onde a fiabilidade é
              crítica.
            </p>
          </div>

        </div>
      </motion.div>

      {/* SECÇÃO 2 — DESPORTOS MOTORIZADOS */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-20"
      >
        <h2 className="text-3xl font-bold text-yellow-400 mb-6">
          Desportos Motorizados – Onde a ROWE Prova o Que Vale
        </h2>

        <img
          src="/images/history/imagem02.png"
          alt="Equipa ROWE Racing"
          className="float-right ml-6 mb-4 w-72 rounded-lg shadow-lg"
        />

        <p className="leading-relaxed text-lg text-white/90 text-justify">
          A presença da ROWE nos desportos motorizados é mais do que patrocínio:
          é um laboratório vivo. A marca está profundamente envolvida em
          competições onde cada segundo conta e onde a fiabilidade decide
          campeonatos.
        </p>

        <ul className="mt-4 space-y-2 text-white/90">
          <li>• ROWE Racing como equipa de referência no endurance europeu</li>
          <li>• Participação nas 24 Horas de Nürburgring e Spa</li>
          <li>• Desenvolvimento de lubrificantes testados em condições extremas</li>
          <li>• Transferência direta de tecnologia da pista para o consumidor</li>
        </ul>

        <p className="mt-4 text-yellow-300 font-semibold italic">
          Se resiste na pista, supera qualquer desafio na estrada.
        </p>

        <div className="clear-both"></div>
      </motion.div>

      {/* SECÇÃO 3 — PRESENÇA INDUSTRIAL */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-20"
      >
        <h2 className="text-3xl font-bold text-yellow-400 mb-6">
          Presença Industrial e Mobilidade Global
        </h2>

        <img
          src="/images/history/imagem03.png"
          alt="Lubrificantes ROWE em maquinaria pesada"
          className="float-left mr-6 mb-4 w-72 rounded-lg shadow-lg"
        />

        <p className="leading-relaxed text-lg text-white/90 text-justify">
          Para além do desporto, a ROWE está presente em setores essenciais da
          economia global:
        </p>

        <ul className="mt-4 space-y-2 text-white/90">
          <li>• Automóveis ligeiros e pesados</li>
          <li>• Equipamentos industriais</li>
          <li>• Máquinas agrícolas</li>
          <li>• Construção e mineração</li>
          <li>• Sistemas hidráulicos e aplicações especiais</li>
        </ul>

        <p className="mt-4 leading-relaxed text-lg text-white/90 text-justify">
          A marca tornou‑se sinónimo de eficiência energética, proteção avançada
          contra desgaste e durabilidade em ambientes severos.
        </p>

        <div className="clear-both"></div>
      </motion.div>

      {/* SECÇÃO 4 — SUSTENTABILIDADE */}
      <motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="mb-20"
>
  <h2 className="text-3xl font-bold text-yellow-400 mb-6">
    Sustentabilidade e Inovação
  </h2>

  <div className="flex flex-col md:flex-row items-start gap-8">

    {/* TEXTO À ESQUERDA */}
    <div className="md:w-1/2">
      <p className="leading-relaxed text-lg text-white/90 text-justify">
        A ROWE investe fortemente em <strong>produção neutra em carbono</strong>,
        <strong> reciclagem avançada</strong> e <strong>redução contínua de emissões</strong>,
        desenvolvendo lubrificantes de nova geração que combinam alta performance,
        proteção superior e eficiência energética real. Cada produto é formulado com
        aditivos de última geração e processos de engenharia alemã que garantem maior
        durabilidade, menor desgaste e excelente estabilidade térmica, mesmo em
        condições extremas.
      </p>

      <p className="leading-relaxed text-lg text-white/90 text-justify mt-4">
        Para Angola e África, estes avanços traduzem‑se em benefícios diretos:
        motores que duram mais, menor consumo de combustível, intervalos de
        manutenção mais longos e maior fiabilidade em ambientes de calor intenso,
        poeira e operações severas. É tecnologia sustentável aplicada ao terreno
        africano, reduzindo custos operacionais e aumentando a produtividade de
        veículos, frotas e maquinaria pesada.
      </p>

      <p className="leading-relaxed text-lg text-white/90 text-justify mt-4">
        Uma marca global com responsabilidade local — preparada para impulsionar o
        futuro energético e industrial do continente.
      </p>
    </div>

    {/* IMAGEM À DIREITA */}
    <div className="md:w-1/2">
      <img
        src="/images/history/imagem04.png"
        alt="Fábrica ROWE moderna"
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
        className="text-center mt-20"
      >
        <p className="text-xl text-white/90 leading-relaxed mb-6">
          A ROWE chega a Angola com o mesmo ADN que a tornou uma referência
          global: <strong>performance real, engenharia rigorosa e compromisso
          com o futuro</strong>.
        </p>

        <img
          src="/images/logo/lg02.png"
          alt="ROWE Logo"
          className="mx-auto mb-4 w-64"
        />

        <p className="text-xl font-semibold text-yellow-300">
          Energia para mover Angola. Tecnologia para impulsionar África.
        </p>
      </motion.div>

    </section>
  );
}
