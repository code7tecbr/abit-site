import { Card } from "@/shared/ui";
import type { MissionPillar } from "../model";

interface MissionCardProps {
  pillar: MissionPillar;
}

export function MissionCard({ pillar }: MissionCardProps) {
  return (
    <Card className="flex flex-col items-center text-center gap-4 h-full">
      <div className="text-5xl">{pillar.icon}</div>
      <h3 className="text-xl md:text-2xl font-bold text-[#FFD700]">
        {pillar.title}
      </h3>
      <p className="text-sm md:text-base text-[#CCCCCC] leading-relaxed">
        {pillar.description}
      </p>
    </Card>
  );
}
