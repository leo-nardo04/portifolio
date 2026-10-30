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
} from "react-icons/fa6";

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

  return (
    <div className="min-h-screen font-sans bg-slate-950 text-slate-100 bg-dots">
      {/* Largura aumentada para 90% (até 1400px máximo) */}
      <div className="w-[90%] max-w-[1400px] mx-auto pt-6 sm:pt-12">
        <Header />
      </div>

      <div className="flex flex-col overflow-hidden">
        {/* Secção Hero Scroll 3D (Focada no TCC) */}
        <div className="flex flex-col overflow-hidden">
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
                  compreensão de conceitos abstratos de memória e ponteiros,
                  utilizando IA para extração de estados e React/Remotion para
                  renderização determinística.
                </p>
              </div>
            }
          >
            {/* Ecrã 3D: Diagrama do Pipeline baseado na Metodologia do TCC */}
            <div className="h-full w-full bg-slate-900/80 flex flex-col items-center justify-center p-3 sm:p-6 md:p-8 lg:p-12 rounded-xl relative overflow-hidden">
              {/* Efeito de brilho de fundo suave */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(204,189,158,0.08),transparent_70%)] pointer-events-none" />

              <div className="relative z-10 w-full max-w-5xl flex flex-col items-center gap-4 sm:gap-6 lg:gap-10">
                <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs sm:text-sm border-b border-slate-800 pb-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Pipeline de Renderização Automatizada (WIP)
                </div>

                {/* Fluxograma visual responsivo */}
                <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between w-full gap-2 sm:gap-3 lg:gap-2 max-w-md lg:max-w-none mx-auto">
                  {pipelineSteps.map((item, index) => (
                    <div
                      key={item.step}
                      className="contents lg:flex lg:flex-1 lg:items-center"
                    >
                      {/* Card do Passo */}
                      <div
                        className={`flex flex-row lg:flex-col items-center lg:justify-center p-2.5 sm:p-3.5 lg:p-5 rounded-xl w-full lg:w-full lg:flex-1 shadow-lg transition-all duration-300 gap-3 lg:gap-3 group ${
                          item.highlight
                            ? "bg-slate-950/90 border border-emerald-500/40 shadow-[0_0_20px_rgba(204,189,158,0.12)] hover:border-emerald-400"
                            : "bg-slate-950/70 border border-slate-800 hover:border-emerald-500/30"
                        }`}
                      >
                        {/* Ícone */}
                        <div
                          className={`p-2 sm:p-2.5 lg:p-3 rounded-lg shrink-0 flex items-center justify-center transition-colors ${
                            item.highlight
                              ? "bg-emerald-400/10 text-emerald-400 border border-emerald-500/30"
                              : "bg-slate-900 text-slate-400 border border-slate-800 group-hover:text-emerald-400"
                          }`}
                        >
                          <item.icon
                            className={`text-xl sm:text-2xl lg:text-3xl ${
                              item.highlight ? "animate-pulse" : ""
                            }`}
                          />
                        </div>

                        {/* Texto */}
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

                        {/* Badge */}
                        <span className="shrink-0 text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-emerald-400/10 text-emerald-400 border border-emerald-500/20">
                          {item.badge}
                        </span>
                      </div>

                      {/* Seta conectora */}
                      {index < pipelineSteps.length - 1 && (
                        <div className="flex items-center justify-center shrink-0 py-0.5 lg:py-0 lg:px-1 self-center">
                          <FaArrowRight className="text-emerald-500/60 rotate-90 lg:rotate-0 text-xs sm:text-sm shrink-0 transition-transform" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <p className="text-slate-400 text-[11px] sm:text-xs md:text-sm font-mono text-center max-w-2xl px-2">
                  // Em breve: Demonstrações visuais da manipulação de memória
                  (Heap/Stack), ponteiros e alocação dinâmica.
                </p>
              </div>
            </div>
          </ContainerScroll>
        </div>
      </div>

      {/* Grelha de Experiências */}
      <div className="w-[90%] max-w-[1400px] mx-auto pb-24 flex flex-col gap-6 relative z-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-emerald-400">
          Trajetória & Projetos
        </h2>

        {/* 6 experiências distribuídas harmonicamente em 1, 2 ou 3 colunas */}
        <BentoGrid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {experiencesData.map((exp) => (
            <BentoCard
              key={exp.id}
              name={exp.title}
              description={exp.summary}
              badge={exp.category}
              Icon={getIcon(exp.id)}
              className="col-span-1"
              onClick={() => setSelectedExp(exp)}
            />
          ))}
        </BentoGrid>
      </div>

      <ExperienceModal
        exp={selectedExp}
        isOpen={!!selectedExp}
        onClose={() => setSelectedExp(null)}
      />
    </div>
  );
}
