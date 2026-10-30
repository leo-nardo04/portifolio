import { cn } from "../lib/utils";

export const BentoGrid = ({ children, className }) => {
  return (
    // A classe grid-cols-1 garante que no celular seja apenas uma coluna. md:grid-cols-3 aplica as 3 colunas em telas maiores.
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-1 md:grid-cols-3 gap-4",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({
  name,
  description,
  Icon,
  badge,
  className,
  onClick,
}) => (
  <div
    onClick={onClick}
    className={cn(
      "group relative flex flex-col justify-between overflow-hidden rounded-xl p-6 cursor-pointer",
      "transform-gpu transition-all duration-300",
      "bg-slate-900 border border-slate-800 hover:border-emerald-900/80",
      "shadow-lg hover:shadow-xl",
      className,
    )}
  >
    <div className="z-10 flex transform-gpu flex-col gap-2 transition-all duration-300 group-hover:-translate-y-2">
      {Icon && (
        <Icon className="h-10 w-10 text-slate-400 transition-all duration-300 group-hover:text-emerald-500" />
      )}

      <span className="text-xs font-mono font-semibold text-emerald-400 bg-emerald-400/10 w-fit px-2 py-1 rounded-md mt-2">
        {badge}
      </span>

      <h3 className="text-xl font-bold text-slate-200 mt-2 leading-tight">
        {name}
      </h3>
      <p className="max-w-lg text-slate-400 text-sm mt-2 line-clamp-3">
        {description}
      </p>
    </div>

    <div className="mt-4 flex w-full transform-gpu flex-row items-center opacity-70 transition-all duration-300 group-hover:opacity-100">
      <span className="text-emerald-400 text-sm font-medium flex items-center gap-2">
        Ver detalhes{" "}
        <span className="text-lg leading-none transition-transform group-hover:translate-x-1">
          →
        </span>
      </span>
    </div>

    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-slate-800/20" />
  </div>
);
