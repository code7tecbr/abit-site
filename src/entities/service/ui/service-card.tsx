import { Card } from "@/shared/ui";
import type { Service } from "../model";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card className="text-center flex flex-col items-center gap-4 h-full">
      <div className="text-5xl md:text-6xl">{service.icon}</div>
      <h3 className="text-lg md:text-xl font-bold text-[#FFD700] leading-tight">
        {service.title}
      </h3>
      {service.description && (
        <p className="text-sm text-[#CCCCCC]">{service.description}</p>
      )}
    </Card>
  );
}
