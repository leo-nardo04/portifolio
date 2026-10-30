import { useState } from "react";
import Header from "./components/Header";
import { BentoGrid, BentoCard } from "./components/BentoGrid";
import ExperienceModal from "./components/ExperienceModal";
import { ContainerScroll } from "./components/ContainerScroll";
import { experiencesData } from "./data/experiences";
import {
  Code2,
  Gamepad2,
  MonitorPlay,
  Users,
  LineChart,
  Globe,
  Terminal,
} from "lucide-react";

const getIcon = (id) => {
  switch (id) {
    case "atlas-ej":
      return Code2;
    case "kodland":
      return Gamepad2;
    case "aeds-monitor":
      return MonitorPlay;
    case "caat-vp":
      return Users;
    case "pibic":
      return LineChart;
    case "esf-english":
      return Globe;
    default:
      return Code2;
  }
};

export default function App() {
  const [selectedExp, setSelectedExp] = useState(null);

  // Removido o isDark. Fundo fixo para Dark Mode com bg-slate-950
  return (
    <div className="min-h-screen font-sans bg-slate-950 text-slate-100 bg-dots">
      {/* Largura aumentada para 90% (até 1400px máximo) */}
      <div className="w-[90%] max-w-[1400px] mx-auto pt-12">
        <Header />
      </div>

      <div className="flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <div className="flex flex-col items-center justify-center gap-4 px-4 pb-4 mt-8">
              <h1 className="text-4xl md:text-6xl font-bold text-slate-100 tracking-tight leading-tight">
                Transformando desafios <br />
                <span className="text-emerald-400 font-mono text-3xl md:text-5xl mt-2 block">
                  em soluções escaláveis
                </span>
              </h1>
              <p className="text-slate-400 max-w-xl mt-4">
                Faça scroll para explorar o meu percurso na engenharia de
                software e análise de dados.
              </p>
            </div>
          }
        >
          <div className="h-full w-full bg-slate-900/50 flex flex-col items-center justify-center p-8 text-center rounded-xl relative overflow-hidden">
            <Terminal className="h-16 w-16 text-emerald-400/50 mb-4" />
            <h3 className="text-xl text-slate-300 font-mono">
              print("Olá, Mundo!")
            </h3>
            <p className="text-slate-500 text-sm mt-2 font-mono">
              Espaço reservado para um print do seu projeto (ex: Gestão de Saúde
              Atlas)
            </p>
          </div>
        </ContainerScroll>
      </div>

      {/* Largura da grelha de cartões também acompanhando os 90% */}
      <div className="w-[90%] max-w-[1400px] mx-auto pb-24 flex flex-col gap-6 -mt-32 relative z-10">
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
