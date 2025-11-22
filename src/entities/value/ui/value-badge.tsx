import type { CompanyValue } from "../model";

interface ValueBadgeProps {
  value: CompanyValue;
}

export function ValueBadge({ value }: ValueBadgeProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-[#FFD700] bg-gradient-to-br from-[#FFD700]/20 to-transparent flex items-center justify-center text-4xl md:text-5xl">
        {value.icon}
      </div>
      <h3 className="text-lg md:text-xl font-bold text-[#FFD700]">
        {value.title}
      </h3>
    </div>
  );
}
