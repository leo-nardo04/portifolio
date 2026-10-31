import React, { useEffect } from "react";
import {
  FaXmark,
  FaGlobe,
  FaLinkedin,
  FaInstagram,
  FaFileLines,
  FaVideo,
} from "react-icons/fa6";

const ExperienceModal = ({ isOpen, onClose, experience }) => {
  // Prevenir scroll do body quando o modal está aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Fechar com a tecla Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!isOpen || !experience) return null;

  // Função auxiliar para renderizar o ícone e estilo correto baseado no tipo de link
  const getLinkConfig = (type) => {
    switch (type.toLowerCase()) {
      case "web":
        return {
          icon: <FaGlobe />,
          color: "bg-emerald-600 hover:bg-emerald-500",
        };
      case "linkedin":
        return { icon: <FaLinkedin />, color: "bg-blue-600 hover:bg-blue-500" };
      case "instagram":
        return {
          icon: <FaInstagram />,
          color: "bg-pink-600 hover:bg-pink-500",
        };
      case "artigo":
        return {
          icon: <FaFileLines />,
          color: "bg-slate-700 hover:bg-slate-600",
        };
      case "vídeo highlight":
      case "video":
        return { icon: <FaVideo />, color: "bg-red-600 hover:bg-red-500" };
      default:
        return {
          icon: <FaGlobe />,
          color: "bg-emerald-600 hover:bg-emerald-500",
        };
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Container do Modal */}
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-slate-950 border border-emerald-500/30 rounded-2xl shadow-2xl p-6 md:p-8 bg-diagonal"
        onClick={(e) => e.stopPropagation()} // Evita fechar ao clicar dentro do modal
      >
        {/* Botão Fechar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-emerald-400 hover:bg-emerald-500/10 rounded-full transition-colors"
          aria-label="Fechar modal"
        >
          <FaXmark className="text-xl" />
        </button>

        {/* Cabeçalho */}
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl">
            <experience.icon className="text-2xl" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-100">
              {experience.title}
            </h3>
            <p className="text-emerald-400 font-medium">
              {experience.company}{" "}
              <span className="text-slate-500 mx-2">•</span>{" "}
              <span className="text-slate-400">{experience.period}</span>
            </p>
          </div>
        </div>

        {/* Corpo de Texto (Justificado) */}
        <div className="space-y-4 mb-8">
          <p className="text-slate-300 text-justify text-lg font-medium">
            {experience.description}
          </p>
          <p className="text-slate-400 text-justify leading-relaxed">
            {experience.details}
          </p>
        </div>

        {/* Tags de Competências */}
        {experience.tags && experience.tags.length > 0 && (
          <div className="mb-8">
            <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-3">
              Competências & Ferramentas
            </h4>
            <div className="flex flex-wrap gap-2">
              {experience.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-slate-800/80 border border-slate-700 text-emerald-300 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Links Externos */}
        {experience.links && experience.links.length > 0 && (
          <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-800">
            {experience.links.map((link, index) => {
              const { icon, color } = getLinkConfig(link.type);
              return (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-white font-medium transition-all duration-300 shadow-lg hover:-translate-y-1 ${color}`}
                >
                  {icon}
                  {link.type}
                </a>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceModal;
