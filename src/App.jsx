import { useState } from "react";
import Header from "./components/Header";
import { BentoGrid, BentoCard } from "./components/BentoGrid";
import ExperienceModal from "./components/ExperienceModal";
import { ContainerScroll } from "./components/ContainerScroll";
import { experiencesData } from "./data/experiences";

// Usando apenas os ícones do FontAwesome 6 (fa6) para garantir estabilidade
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

export default function App() {
  const [selectedExp, setSelectedExp] = useState(null);

  return (
    <div className="min-h-screen font-sans bg-slate-950 text-slate-100 bg-dots">
      {/* Largura aumentada para 90% (até 1400px máximo) */}
      <div className="w-[90%] max-w-[1400px] mx-auto pt-12">
        <Header />
      </div>

      <div className="flex flex-col overflow-hidden">
        {/* Secção Hero Scroll 3D (Focada no TCC) */}
        <div className="flex flex-col overflow-hidden">
          <ContainerScroll
            titleComponent={
              <div className="flex flex-col items-center justify-center gap-4 px-4 pb-4 mt-8">
                <span className="w-fit px-6 py-2 rounded-full border border-emerald-500/80 text-emerald-400 text-sm md:text-base font-mono font-bold bg-emerald-400/10 mb-4">
                  TCC em Andamento
                </span>
                <h1 className="text-3xl md:text-5xl font-bold text-slate-100 tracking-tight leading-tight max-w-4xl text-center">
                  Automação Visual no Ensino de POO
                  <span className="text-slate-400 text-xl md:text-3xl mt-4 block font-normal leading-relaxed">
                    Integrando Agentes de IA e Remotion para Estruturas de Dados
                    em C++
                  </span>
                </h1>
                <p className="text-slate-300 text-base leading-relaxed max-w-3xl text-center mt-6">
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
            <div className="h-full w-full bg-slate-900/80 flex flex-col items-center justify-center p-6 md:p-12 rounded-xl relative overflow-hidden">
              {/* Efeito de brilho de fundo */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(157,32,83,0.1),transparent_60%)]"></div>

              <div className="relative z-10 w-full max-w-4xl flex flex-col items-center gap-12">
                <div className="text-emerald-400 font-mono text-sm md:text-base border-b border-slate-800 pb-2">
                  Pipeline de Renderização (WIP)
                </div>

                {/* Fluxograma visual responsivo */}
                <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4 md:gap-2">
                  {/* 1. Entrada de Código */}
                  <div className="flex flex-col items-center justify-center p-4 md:p-6 bg-slate-950 border border-slate-800 rounded-xl w-32 md:w-40 shadow-lg group hover:border-emerald-400/50 transition-colors">
                    <FaFileCode
                      size={32}
                      className="text-slate-400 group-hover:text-emerald-400 mb-3 transition-colors"
                    />
                    <span className="text-slate-300 font-mono text-xs mb-1 text-center">
                      1. Entrada
                    </span>
                    <div className="text-emerald-400 font-bold text-sm">
                      Código C++
                    </div>
                  </div>

                  <FaArrowRight className="text-slate-700 rotate-90 md:rotate-0" />

                  {/* 2. Processamento IA */}
                  <div className="flex flex-col items-center justify-center p-4 md:p-6 bg-slate-950 border border-emerald-900 rounded-xl w-32 md:w-40 shadow-[0_0_20px_rgba(157,32,83,0.2)]">
                    <FaMicrochip
                      size={32}
                      className="text-emerald-400 mb-3 animate-pulse"
                    />
                    <span className="text-slate-300 font-mono text-xs mb-1 text-center">
                      2. Agente IA
                    </span>
                    <div className="text-emerald-400 font-bold text-center text-sm leading-tight">
                      Extração de
                      <br />
                      Estado
                    </div>
                  </div>

                  <FaArrowRight className="text-slate-700 rotate-90 md:rotate-0" />

                  {/* 3. Renderização */}
                  <div className="flex flex-col items-center justify-center p-4 md:p-6 bg-slate-950 border border-slate-800 rounded-xl w-32 md:w-40 shadow-lg group hover:border-emerald-400/50 transition-colors">
                    <FaReact
                      size={32}
                      className="text-slate-400 group-hover:text-emerald-400 mb-3 transition-colors"
                    />
                    <span className="text-slate-300 font-mono text-xs mb-1 text-center">
                      3. Render
                    </span>
                    <div className="text-emerald-400 font-bold text-sm">
                      Remotion
                    </div>
                  </div>

                  <FaArrowRight className="text-slate-700 rotate-90 md:rotate-0" />

                  {/* 4. Saída Final */}
                  <div className="flex flex-col items-center justify-center p-4 md:p-6 bg-slate-950 border border-slate-800 rounded-xl w-32 md:w-40 shadow-lg group hover:border-emerald-400/50 transition-colors">
                    <FaFileVideo
                      size={32}
                      className="text-slate-400 group-hover:text-emerald-400 mb-3 transition-colors"
                    />
                    <span className="text-slate-300 font-mono text-xs mb-1 text-center">
                      4. Saída
                    </span>
                    <div className="text-emerald-400 font-bold text-sm text-center">
                      Vídeo
                      <br />
                      Determinístico
                    </div>
                  </div>
                </div>

                <p className="text-slate-500 text-xs md:text-sm mt-4 font-mono text-center max-w-2xl px-4">
                  // Em breve: Demonstrações visuais da manipulação da memória
                  (Heap/Stack), ponteiros e alocação dinâmica.
                </p>
              </div>
            </div>
          </ContainerScroll>
        </div>
      </div>

      {/* Grelha de Experiências */}
      {/* Alterado de -mt-32 para -mt-4 para descolar do ecrã */}
      <div className="w-[90%] max-w-[1400px] mx-auto pb-24 flex flex-col gap-6 -mt-4 relative z-10">
        <h2 className="text-2xl font-bold text-emerald-400">
          Trajetória & Projetos
        </h2>

        {/* Usando até 4 colunas em telas grandes dado o novo espaço */}
        <BentoGrid className="md:grid-cols-3 lg:grid-cols-4">
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
