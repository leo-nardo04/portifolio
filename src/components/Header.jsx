import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";

export default function Header() {
  return (
    <header className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 py-12 border-b border-slate-800">
      <div className="flex-1 flex flex-col gap-5">
        <span className="w-fit px-5 py-2 md:px-6 md:py-2.5 rounded-full border border-emerald-400 text-emerald-400 text-sm md:text-base font-mono font-bold bg-emerald-400/10 shadow-[0_0_15px_rgba(157,32,83,0.2)]">
          Disponível para oportunidades
        </span>

        <div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-100">
            Leonardo Tiago
          </h1>
          <p className="text-slate-300 font-mono text-sm mt-2">
            Engenharia de Computação • UNIFEI (campus Itabira) • Foco em Web &
            Dados
          </p>
        </div>

        <p className="text-slate-400 text-base leading-relaxed max-w-2xl mt-2">
          Trajetória enriquecida por liderança estudantil, ensino de programação
          e projetos de extensão. Atualmente reside em Itabira, com mudança
          planeada para Belo Horizonte a partir de 2027.
        </p>

        <div className="flex flex-wrap items-center gap-6 text-sm font-mono pt-4">
          <a
            href="https://github.com/leo-nardo04"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors"
          >
            <FaGithub size={18} />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/leonardo-tiago-320a47396/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors"
          >
            <FaLinkedin size={18} />
            <span>LinkedIn</span>
          </a>
          <a
            href="mailto:leonardotiago7@gmail.com"
            className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors"
          >
            <FaEnvelope size={18} />
            <span>Email</span>
          </a>
        </div>
      </div>

      <div className="shrink-0 relative group">
        <div className="absolute -inset-1 bg-emerald-400 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition duration-500"></div>
        <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full border-4 border-emerald-400 overflow-hidden bg-slate-900 shadow-2xl">
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
