import type { ProcessBadge } from "../model";

interface BadgeProps {
  badge: ProcessBadge;
}

export function Badge({ badge }: BadgeProps) {
  return (
    <div className="px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-[#FFD700] to-[#FFC700] text-black font-bold text-xs md:text-sm rounded-full whitespace-nowrap">
      {badge.label}
    </div>
  );
}
