import { useState } from "react";
import Header from "./components/Header";
import { BentoGrid, BentoCard } from "./components/BentoGrid";
import ExperienceModal from "./components/ExperienceModal";
import { ContainerScroll } from "./components/ContainerScroll";
import { experiencesData } from "./data/experiences";

import {
  FaCode,
  FaGamepad,
  FaLaptopCode,
  FaUsers,
  FaChartLine,
  FaGlobe,
  FaFileCode,
  FaMicrochip,
  FaReact,
  FaFileVideo,
  FaArrowRight,
  FaChalkboardUser,
  FaCalculator,
  FaArrowUp, // Ícone novo para o rodapé
} from "react-icons/fa6";

const timelineData = [
  {
    date: "2022 - 2024",
    role: "Base e Impacto: Ensino Social (CITinova/ESF) e Liderança (CAAT)",
  },
  {
    date: "2025",
    role: "Pesquisa & Web Dev: Iniciação Científica (PIBIC) e Atlas EJ",
  },
  {
    date: "Fev 2026",
    role: "Educação Tech: Ensinando Lógica e Python para Jovens (Kodland)",
  },
  {
    date: "Set 2026",
    role: "Imersão Técnica: Monitoria C++ (UNIFEI) e Apoio em Dados (Microlins)",
  },
  {
    date: "2027",
    role: "O Próximo Salto: Estágio em Software/Dados no mercado de BH",
  },
];

const getIcon = (id) => {
  switch (id) {
    case "atlas-ej":
      return FaCode;
    case "kodland":
      return FaGamepad;
    case "aeds-monitor":
      return FaLaptopCode;
    case "caat-vp":
      return FaUsers;
    case "pibic":
      return FaChartLine;
    case "esf-english":
      return FaGlobe;
    case "microlins":
      return FaChalkboardUser;
    case "citinova":
      return FaCalculator;
    default:
      return FaCode;
  }
};

const pipelineSteps = [
  {
    step: "01",
    phase: "1. Entrada",
    title: "Código C++",
    badge: "POO / Ponteiros",
    icon: FaFileCode,
    desc: "Estruturas de Dados e memória",
  },
  {
    step: "02",
    phase: "2. Agente IA",
    title: "Extração de Estado",
    badge: "Core do TCC",
    icon: FaMicrochip,
    desc: "Parser de frames, Heap e Stack",
    highlight: true,
  },
  {
    step: "03",
    phase: "3. Render",
    title: "Remotion",
    badge: "React Video",
    icon: FaReact,
    desc: "Composição determinística",
  },
  {
    step: "04",
    phase: "4. Saída",
    title: "Vídeo Didático",
    badge: "60 FPS / MP4",
    icon: FaFileVideo,
    desc: "Animação pedagógica dos conceitos",
  },
];

export default function App() {
  const [selectedExp, setSelectedExp] = useState(null);

  // Função para voltar ao topo suavemente
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen font-sans bg-slate-950 text-slate-100 bg-dots flex flex-col">
      {/* 1. HEADER */}
      <div className="w-[90%] max-w-[1400px] mx-auto pt-6 sm:pt-12">
        <Header />
      </div>

      {/* 2. TIMELINE INTERATIVA */}
      <div className="w-[90%] max-w-5xl mx-auto my-12 relative z-10">
        <h2 className="text-2xl font-bold text-emerald-400 text-center mb-12">
          Timeline Resumida
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-between relative px-4">
          {/* Linha conectora de fundo (cinza) - Mais grossa (h-1) e perfeitamente alinhada */}
          <div className="absolute left-1/2 md:left-4 right-auto md:right-4 top-0 md:top-2.5 w-1 md:w-auto h-full md:h-1 bg-slate-800 -z-10 transform -translate-x-1/2 md:-translate-x-0 rounded-full"></div>

          {/* Linha de progresso (verde) - Mais grossa (h-1) e preenche até 85% (posição atual) */}
          <div className="absolute left-1/2 md:left-4 top-0 md:top-2.5 w-1 md:w-[85%] h-[85%] md:h-1 bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.5)] -z-10 transform -translate-x-1/2 md:-translate-x-0 rounded-full flex flex-col md:flex-row items-center justify-end md:items-center md:justify-end">
            {/* Bolinha indicadora do momento atual, fixada na ponta da linha */}
            <div className="w-4 h-4 rounded-full bg-emerald-400 border-2 border-slate-950 shadow-[0_0_10px_rgba(16,185,129,0.8)] transform translate-y-2 md:translate-y-0 md:translate-x-2 z-10"></div>
          </div>

          {timelineData.map((item, index) => {
            // Verifica se o item já é passado/presente (índices 0, 1, 2 e 3)
            const isPast = index < 4;

            return (
              <div
                key={index}
                onClick={() =>
                  document
                    .getElementById("experiencias")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="relative group cursor-pointer flex flex-col items-center mb-12 md:mb-0 last:mb-0 w-32"
              >
                {/* Bolinha da Timeline */}
                <div
                  className={`w-6 h-6 rounded-full border-2 border-emerald-400 group-hover:scale-125 transition-all duration-300 z-10 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0)] group-hover:shadow-[0_0_15px_rgba(16,185,129,0.5)] ${
                    isPast
                      ? "bg-emerald-500"
                      : "bg-slate-950 group-hover:bg-emerald-400"
                  }`}
                ></div>

                {/* Data */}
                <span
                  className={`mt-4 text-sm font-mono group-hover:text-emerald-400 transition-colors text-center ${
                    isPast ? "text-emerald-300/90" : "text-slate-400"
                  }`}
                >
                  {item.date}
                </span>

                {/* Tooltip (Hover) */}
                <div className="absolute bottom-full mb-6 md:mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none w-max max-w-[260px] text-center z-20">
                  <div className="bg-slate-800 text-slate-200 text-xs md:text-sm p-3 rounded-lg shadow-xl border border-emerald-500/30 leading-relaxed">
                    {item.role}
                  </div>
                  <div className="w-3 h-3 bg-slate-800 border-b border-r border-emerald-500/30 transform rotate-45 absolute -bottom-1.5 left-1/2 -translate-x-1/2"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. OBJETIVO E DISPONIBILIDADE */}
      <div className="w-[90%] max-w-3xl mx-auto mt-8 mb-16 relative z-10">
        <div className="bg-slate-900/60 backdrop-blur-md border border-emerald-500/20 rounded-2xl p-6 md:p-8 shadow-lg shadow-emerald-900/10 transition-all hover:border-emerald-500/40">
          <h2 className="text-emerald-400 text-center font-mono text-sm mb-6 uppercase tracking-widest flex items-center justify-center gap-3">
            <span className="w-8 h-px bg-emerald-500/30"></span>
            Próximos Passos
            <span className="w-8 h-px bg-emerald-500/30"></span>
          </h2>
          <p className="text-slate-300 text-justify text-lg md:text-xl leading-relaxed">
            Busco oportunidades de{" "}
            <strong className="text-emerald-300 font-semibold">
              estágio ou trainee em Engenharia de Software e Análise de Dados
            </strong>{" "}
            (ou áreas correlatas) em Belo Horizonte (início em 2027). Com as
            disciplinas curriculares na reta final, possuo quase total
            disponibilidade de horário (para 2027 tenho restante 1 matéria e o
            TCC 2).
          </p>
        </div>
      </div>

      {/* 4. CARDS DE EXPERIÊNCIAS */}
      <div
        id="experiencias"
        className="w-[90%] max-w-[1400px] mx-auto py-16 flex flex-col gap-6 relative z-10"
      >
        <h2 className="text-2xl font-bold text-emerald-400 text-center mb-4">
          Trajetória & Projetos
        </h2>
        <BentoGrid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {experiencesData.map((exp) => (
            <BentoCard
              key={exp.id}
              name={exp.title}
              description={exp.description || exp.summary}
              badge={exp.category}
              Icon={exp.icon || getIcon(exp.id)}
              className="col-span-1"
              onClick={() => setSelectedExp(exp)}
            />
          ))}
        </BentoGrid>
      </div>

      {/* 5. TCC NO 3D */}
      <div className="flex flex-col overflow-hidden w-full mb-12">
        <ContainerScroll
          titleComponent={
            <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 px-2 sm:px-4 pb-2 sm:pb-4 mt-2 sm:mt-6">
              <span className="w-fit px-4 py-1.5 sm:px-6 sm:py-2 rounded-full border border-emerald-500/80 text-emerald-400 text-xs sm:text-sm md:text-base font-mono font-bold bg-emerald-400/10 mb-2 sm:mb-4">
                TCC em Andamento
              </span>
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-slate-100 tracking-tight leading-tight max-w-4xl text-center">
                Automação Visual no Ensino de POO
                <span className="text-slate-400 text-base sm:text-xl md:text-3xl mt-2 sm:mt-4 block font-normal leading-relaxed">
                  Integrando Agentes de IA e Remotion para Estruturas de Dados
                  em C++
                </span>
              </h1>
              <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed max-w-3xl text-center mt-3 sm:mt-6">
                Desenvolvimento de um pipeline automatizado para converter
                código C++ em animações didáticas. O foco é facilitar a
                compreensão de conceitos abstratos de memória e ponteiros.
              </p>
            </div>
          }
        >
          <div className="h-full w-full bg-slate-900/80 flex flex-col items-center justify-center p-3 sm:p-6 md:p-8 lg:p-12 rounded-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(204,189,158,0.08),transparent_70%)] pointer-events-none" />
            <div className="relative z-10 w-full max-w-5xl flex flex-col items-center gap-4 sm:gap-6 lg:gap-10">
              <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs sm:text-sm border-b border-slate-800 pb-2">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Pipeline de Renderização Automatizada
              </div>
              <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between w-full gap-2 sm:gap-3 lg:gap-2 max-w-md lg:max-w-none mx-auto">
                {pipelineSteps.map((item, index) => (
                  <div
                    key={item.step}
                    className="contents lg:flex lg:flex-1 lg:items-center"
                  >
                    <div
                      className={`flex flex-row lg:flex-col items-center lg:justify-center p-2.5 sm:p-3.5 lg:p-5 rounded-xl w-full lg:w-full lg:flex-1 shadow-lg transition-all duration-300 gap-3 lg:gap-3 group ${item.highlight ? "bg-slate-950/90 border border-emerald-500/40 shadow-[0_0_20px_rgba(204,189,158,0.12)] hover:border-emerald-400" : "bg-slate-950/70 border border-slate-800 hover:border-emerald-500/30"}`}
                    >
                      <div
                        className={`p-2 sm:p-2.5 lg:p-3 rounded-lg shrink-0 flex items-center justify-center transition-colors ${item.highlight ? "bg-emerald-400/10 text-emerald-400 border border-emerald-500/30" : "bg-slate-900 text-slate-400 border border-slate-800 group-hover:text-emerald-400"}`}
                      >
                        <item.icon
                          className={`text-xl sm:text-2xl lg:text-3xl ${item.highlight ? "animate-pulse" : ""}`}
                        />
                      </div>
                      <div className="flex-1 lg:flex-none flex flex-col items-start lg:items-center text-left lg:text-center min-w-0">
                        <span className="text-[10px] sm:text-xs font-mono text-slate-400 uppercase tracking-wider">
                          {item.phase}
                        </span>
                        <div className="text-xs sm:text-sm lg:text-base font-bold text-emerald-400 truncate w-full">
                          {item.title}
                        </div>
                        <p className="hidden md:block lg:block text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                          {item.desc}
                        </p>
                      </div>
                      <span className="shrink-0 text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-emerald-400/10 text-emerald-400 border border-emerald-500/20">
                        {item.badge}
                      </span>
                    </div>
                    {index < pipelineSteps.length - 1 && (
                      <div className="flex items-center justify-center shrink-0 py-0.5 lg:py-0 lg:px-1 self-center">
                        <FaArrowRight className="text-emerald-500/60 rotate-90 lg:rotate-0 text-xs sm:text-sm shrink-0 transition-transform" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ContainerScroll>
      </div>

      {/* 6. RODAPÉ */}
      <footer className="w-full border-t border-slate-800 mt-auto bg-slate-950/80 backdrop-blur-sm relative z-10 py-6">
        <div className="w-[90%] max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm font-mono text-center md:text-left">
            © {new Date().getFullYear()} Leonardo Tiago. Desenvolvido com React
            & Tailwind CSS.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-400/10 hover:border-emerald-400 transition-all duration-300 text-sm font-semibold group shadow-lg"
          >
            Voltar ao Início
            <FaArrowUp className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </footer>

      {/* Modal de Experiências */}
      <ExperienceModal
        experience={selectedExp}
        isOpen={!!selectedExp}
        onClose={() => setSelectedExp(null)}
      />
    </div>
  );
}
