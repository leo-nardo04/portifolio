import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";

export default function Header() {
  return (
    <header className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12 py-6 sm:py-8 md:py-12 border-b border-slate-800">
      <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-4 sm:gap-5">
        <span className="w-fit px-4 py-1.5 sm:px-5 sm:py-2 rounded-full border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm md:text-base font-mono font-bold bg-emerald-400/10 shadow-[0_0_15px_rgba(204,189,158,0.15)]">
          Disponível para oportunidades
        </span>

        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-100">
            Leonardo Tiago
          </h1>
          <p className="text-slate-300 font-mono text-xs sm:text-sm mt-2">
            Engenharia de Computação • UNIFEI - campus Itabira • Foco em Web &
            Dados
          </p>
        </div>

        <p className="text-slate-200 text-sm sm:text-base md:text-lg font-medium leading-relaxed max-w-2xl mt-1 sm:mt-2">
          Trajetória enriquecida por liderança estudantil, ensino de programação
          e projetos de extensão. Atualmente reside em Itabira, com mudança
          planejada para Belo Horizonte a partir de Dez-2026.
        </p>

        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6 text-xs sm:text-sm font-mono pt-2 sm:pt-4">
          <a
            href="https://github.com/leo-nardo04"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors py-1 px-2 rounded-md hover:bg-slate-900"
          >
            <FaGithub size={18} />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/leonardo-tiago-320a47396/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors py-1 px-2 rounded-md hover:bg-slate-900"
          >
            <FaLinkedin size={18} />
            <span>LinkedIn</span>
          </a>
          <a
            href="mailto:leonardotiago7@gmail.com"
            className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors py-1 px-2 rounded-md hover:bg-slate-900"
          >
            <FaEnvelope size={18} />
            <span>Email</span>
          </a>
        </div>
      </div>

      <div className="shrink-0 relative group">
        <div className="absolute -inset-1 bg-emerald-400 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition duration-500"></div>
        <div className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full border-4 border-emerald-400 overflow-hidden bg-slate-900 shadow-2xl">
          <img
            src="/perfil.png"
            alt="Leonardo Tiago"
            className="w-full h-full object-cover transform transition duration-500 group-hover:scale-110"
          />
        </div>
      </div>
    </header>
  );
}
