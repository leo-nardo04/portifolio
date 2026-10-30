import { X } from "lucide-react";
import { cn } from "../lib/utils";

export default function ExperienceModal({ exp, isOpen, onClose }) {
  if (!isOpen || !exp) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Fundo escuro desfocado (Overlay) */}
      <div
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Container do Modal */}
      <div
        className={cn(
          "relative w-full max-w-2xl bg-slate-900 border border-slate-800 shadow-2xl rounded-2xl overflow-hidden",
          "flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200",
        )}
      >
        {/* Cabeçalho do Modal */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800">
          <div>
            <span className="text-xs font-mono font-semibold text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-md">
              {exp.category}
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-100 mt-3">
              {exp.title}
            </h2>
            <p className="text-slate-400 text-sm">
              {exp.organization} • {exp.period}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-200 bg-slate-800/50 hover:bg-slate-800 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Corpo do Modal (Scrollável) */}
        <div className="p-6 overflow-y-auto">
          <p className="text-slate-300 leading-relaxed">{exp.details}</p>

          <div className="mt-8">
            <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">
              Habilidades Desenvolvidas
            </h4>
            <div className="flex flex-wrap gap-2">
              {exp.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 bg-slate-800 text-slate-300 text-sm rounded-lg border border-slate-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Espaço para futuras fotos/prints (se houver) */}
          {exp.images && exp.images.length > 0 && (
            <div className="mt-8">
              <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">
                Galeria
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {/* Aqui entrarão as tags <img> futuramente */}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
