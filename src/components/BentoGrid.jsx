import { cn } from "../lib/utils";

export const BentoGrid = ({ children, className }) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[18rem] sm:auto-rows-[19rem] lg:auto-rows-[20rem] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",
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
      "group relative flex flex-col justify-between overflow-hidden rounded-xl p-5 sm:p-6 cursor-pointer",
      "transform-gpu transition-all duration-300",
      "bg-slate-900 border border-slate-800 hover:border-emerald-500/50",
      "shadow-lg hover:shadow-xl hover:-translate-y-1",
      className,
    )}
  >
    <div className="z-10 flex transform-gpu flex-col gap-2 transition-all duration-300 group-hover:-translate-y-1">
      {Icon && (
        <Icon className="h-8 w-8 sm:h-10 sm:w-10 text-slate-400 transition-all duration-300 group-hover:text-emerald-400" />
      )}

      <span className="text-xs font-mono font-semibold text-emerald-400 bg-emerald-400/10 w-fit px-2 py-1 rounded-md mt-1 sm:mt-2">
        {badge}
      </span>

      <h3 className="text-lg sm:text-xl font-bold text-slate-200 mt-1 sm:mt-2 leading-tight">
        {name}
      </h3>
      <p className="max-w-lg text-slate-400 text-xs sm:text-sm mt-1 sm:mt-2 line-clamp-3 leading-relaxed">
        {description}
      </p>
    </div>

    <div className="mt-3 sm:mt-4 flex w-full transform-gpu flex-row items-center opacity-80 transition-all duration-300 group-hover:opacity-100">
      <span className="text-emerald-400 text-xs sm:text-sm font-medium flex items-center gap-2">
        Ver detalhes{" "}
        <span className="text-base sm:text-lg leading-none transition-transform group-hover:translate-x-1">
          →
        </span>
      </span>
    </div>

    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-slate-800/20" />
  </div>
);
