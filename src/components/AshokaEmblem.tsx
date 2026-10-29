import React from "react";

interface AshokaProps {
  className?: string;
  size?: number;
  color?: string;
}

export const AshokaChakra: React.FC<AshokaProps> = ({
  className = "",
  size = 40,
  color = "#0B1F4B",
}) => {
  const spokes = Array.from({ length: 24 }, (_, i) => i * 15);
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={`inline-block ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="50" cy="50" r="46" stroke={color} strokeWidth="3" />
      <circle cx="50" cy="50" r="41" stroke={color} strokeWidth="1" strokeDasharray="3 3" />
      <circle cx="50" cy="50" r="10" fill={color} />
      <circle cx="50" cy="50" r="4" fill="#FFFFFF" />
      {spokes.map((deg) => (
        <line
          key={deg}
          x1="50"
          y1="50"
          x2="50"
          y2="10"
          stroke={color}
          strokeWidth="1.8"
          transform={`rotate(${deg} 50 50)`}
        />
      ))}
    </svg>
  );
};

export const CeremonialLaurelSeal: React.FC<{
  title?: string;
  subtitle?: string;
  className?: string;
}> = ({ title = "UPSC CSE", subtitle = "HALL OF FAME", className = "" }) => {
  return (
    <div className={`relative inline-flex flex-col items-center justify-center p-3 text-center ${className}`}>
      <div className="absolute inset-0 border-2 border-gold-600/40 rounded-full scale-95" />
      <div className="absolute inset-1 border border-maroon-700/30 rounded-full" />
      <AshokaChakra size={32} color="#C9A227" />
      {title && <span className="mt-1 text-[10px] font-bold tracking-widest text-navy-900 dark:text-gold-400 uppercase">{title}</span>}
      {subtitle && <span className="text-[8px] font-semibold tracking-wider text-maroon-700 dark:text-slate-300">{subtitle}</span>}
    </div>
  );
};
