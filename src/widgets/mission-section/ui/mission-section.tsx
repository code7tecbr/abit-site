import { Container, Section, SectionTitle } from "@/shared/ui";
import { missionPillarsData, MissionCard } from "@/entities/mission";

export function MissionSection() {
  return (
    <Section id="missao" className="bg-black">
      <Container>
        <SectionTitle>MISSÃO</SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {missionPillarsData.map((pillar) => (
            <MissionCard key={pillar.id} pillar={pillar} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
