import { Container, Section, SectionTitle } from "@/shared/ui";
import { servicesData, ServiceCard } from "@/entities/service";
import { processBadgesData, Badge } from "@/entities/process-badge";

export function ServicesSection() {
  return (
    <Section id="servicos" className="bg-black">
      <Container>
        <SectionTitle>SERVIÇOS</SectionTitle>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Process Badges */}
        <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4">
          {processBadgesData.map((badge) => (
            <Badge key={badge.id} badge={badge} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
