import React from 'react';

interface CalculatorButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'accent' | 'number' | 'equals';
  spanTwo?: boolean;
}

const CalculatorButton: React.FC<CalculatorButtonProps> = ({
  label,
  onClick,
  variant = 'primary',
  spanTwo = false,
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return "bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700";
      case 'secondary':
        return "bg-slate-900 hover:bg-slate-800 text-slate-300 border-slate-800";
      case 'accent':
        return "bg-indigo-700 hover:bg-indigo-600 text-white border-indigo-600 button-glow";
      case 'number':
        return "bg-slate-900 hover:bg-slate-800 text-slate-100 border-slate-800";
      case 'equals':
        return "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white border-indigo-500 button-glow";
      default:
        return "bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700";
    }
  };

  const baseClasses = "font-medium text-lg transition-all duration-200 active:scale-95 rounded-lg border shadow-sm";

  const spanClasses = spanTwo ? "col-span-2" : "";

  return (
    <button
      onClick={onClick}
      className={`
        ${baseClasses}
        ${getVariantClasses()}
        ${spanClasses}
        h-14 md:h-16
        flex items-center justify-center
        select-none
      `}
    >
      <span className="drop-shadow-sm">{label}</span>
    </button>
  );
};

export default CalculatorButton;