import React from "react";

interface MitWpuLogoProps {
  className?: string;
  variant?: "full" | "icon" | "crest";
  monochrome?: boolean;
}

export const MitWpuLogo: React.FC<MitWpuLogoProps> = ({
  className = "h-10 w-auto",
  variant = "full",
  monochrome = false,
}) => {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Official Academic Crest SVG */}
      <svg
        viewBox="0 0 100 100"
        className="w-10 h-10 shrink-0 drop-shadow-sm"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer Circular Seal */}
        <circle
          cx="50"
          cy="50"
          r="47"
          stroke={monochrome ? "currentColor" : "#C9A227"}
          strokeWidth="3"
          fill={monochrome ? "transparent" : "#0B1F4B"}
        />
        <circle
          cx="50"
          cy="50"
          r="41"
          stroke={monochrome ? "currentColor" : "#8B1E2D"}
          strokeWidth="1.5"
          strokeDasharray="2 2"
        />

        {/* World Peace Globe Lines */}
        <ellipse
          cx="50"
          cy="50"
          rx="32"
          ry="32"
          stroke={monochrome ? "currentColor" : "#C9A227"}
          strokeWidth="1"
          strokeOpacity="0.4"
        />
        <ellipse
          cx="50"
          cy="50"
          rx="18"
          ry="32"
          stroke={monochrome ? "currentColor" : "#C9A227"}
          strokeWidth="0.8"
          strokeOpacity="0.3"
        />
        <line
          x1="18"
          y1="50"
          x2="82"
          y2="50"
          stroke={monochrome ? "currentColor" : "#C9A227"}
          strokeWidth="0.8"
          strokeOpacity="0.4"
        />

        {/* Central Flame / Torch of Wisdom & Peace */}
        <path
          d="M50 20 C46 32, 40 37, 43 47 C44 50, 48 53, 50 53 C52 53, 56 50, 57 47 C60 37, 54 32, 50 20 Z"
          fill={monochrome ? "currentColor" : "#FF9933"}
        />
        <path
          d="M50 28 C48 34, 45 37, 47 43 C48 45, 50 47, 50 47 C50 47, 52 45, 53 43 C55 37, 52 34, 50 28 Z"
          fill={monochrome ? "currentColor" : "#C9A227"}
        />

        {/* Open Book of Knowledge */}
        <path
          d="M32 64 C38 61, 46 62, 50 65 C54 62, 62 61, 68 64 L68 74 C62 71, 54 72, 50 75 C46 72, 38 71, 32 74 Z"
          fill={monochrome ? "currentColor" : "#FFFFFF"}
          stroke={monochrome ? "currentColor" : "#C9A227"}
          strokeWidth="1.2"
        />
        <line
          x1="50"
          y1="65"
          x2="50"
          y2="75"
          stroke={monochrome ? "currentColor" : "#0B1F4B"}
          strokeWidth="1.2"
        />

        {/* Laurel Sprig of Peace */}
        <path
          d="M26 48 C24 54, 25 62, 30 68"
          stroke={monochrome ? "currentColor" : "#138808"}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M74 48 C76 54, 75 62, 70 68"
          stroke={monochrome ? "currentColor" : "#138808"}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>

      {variant === "full" && (
        <div className="flex flex-col text-left">
          <span className="font-serif font-bold text-sm tracking-wide leading-tight uppercase text-navy-900 dark:text-white">
            MIT World Peace University
          </span>
          <span className="text-[11px] font-semibold tracking-wider text-maroon-700 dark:text-gold-400">
            PUNE, INDIA • ESTD. 1983
          </span>
          <span className="text-[9.5px] text-slate-500 dark:text-slate-400 tracking-tight">
            Centre for Civil Services Guidance
          </span>
        </div>
      )}
    </div>
  );
};
