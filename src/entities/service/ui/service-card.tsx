import { Card } from "@/shared/ui";
import type { Service } from "../model";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <Card className="text-center flex flex-col items-center gap-4 h-full">
      <Icon className="w-12 h-12 md:w-14 md:h-14 text-white" strokeWidth={1.5} />
      <h3 className="text-lg md:text-xl font-bold text-[#FFD700] leading-tight">
        {service.title}
      </h3>
      {service.description && (
        <p className="text-sm text-[#CCCCCC]">{service.description}</p>
      )}
    </Card>
  );
}
