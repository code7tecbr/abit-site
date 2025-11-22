import type { CompanyValue } from "../model";

interface ValueBadgeProps {
  value: CompanyValue;
}

export function ValueBadge({ value }: ValueBadgeProps) {
  const Icon = value.icon;

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="w-28 h-28 md:w-32 md:h-32 rounded-full border-2 border-[#FFD700] bg-black flex items-center justify-center">
        <Icon className="w-10 h-10 md:w-12 md:h-12 text-white" strokeWidth={1.5} />
      </div>
      <h3 className="text-lg md:text-xl font-bold text-[#FFD700]">
        {value.title}
      </h3>
    </div>
  );
}
