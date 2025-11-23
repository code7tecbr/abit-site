import type { CompanyValue } from "../model";

interface ValueBadgeProps {
  value: CompanyValue;
  isInverter?: boolean;
}

export function ValueBadge({ value, isInverter }: ValueBadgeProps) {
  const Icon = value.icon;
  const divClass = isInverter
    ? "h-32 w-32 z-0 rounded-full border-4 border-[#FFD700] flex items-center justify-end"
    : "h-32 w-32 z-0 rounded-full border-4 border-[#FFD700] flex items-center justify-start";
  const spanClass = isInverter
    ? "mr-14 bg-black z-10 text-xl"
    : "ml-14 bg-black z-10 text-xl";

  return (
    <div className="flex justify-center p-4">
      <div className={divClass}>
        <span className={spanClass}>{value.title}</span>
      </div>
    </div>
  );
}
