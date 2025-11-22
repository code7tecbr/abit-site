import { Container, Section, SectionTitle } from "@/shared/ui";
import { valuesData, ValueBadge } from "@/entities/value";

export function AboutSection() {
  return (
    <Section id="sobre" className="bg-gradient-to-b from-black to-[#0A0A0A]">
      <Container>
        <SectionTitle>SOBRE NÓS</SectionTitle>

        {/* Introduction */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <p className="text-base md:text-lg lg:text-xl text-white font-semibold leading-relaxed mb-8">
            A ABIT PROJETOS & ENGENHARIA NASCE COM O INTUITO DE PROVER PROJETOS
            PERSONALIZADOS E SOLUÇÕES INOVADORAS COM EXCELÊNCIA.
          </p>
        </div>

        {/* Values */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-16 mb-16">
          {valuesData.map((value) => (
            <ValueBadge key={value.id} value={value} />
          ))}
        </div>

        {/* Philosophy */}
        <div className="max-w-3xl mx-auto space-y-6 text-center">
          <p className="text-sm md:text-base text-[#CCCCCC] leading-relaxed">
            ACREDITAMOS EM UM NOVO CONCEITO DE ENGENHARIA E ASSESSORIA, ALIANDO
            TÉCNICA E HUMANISMO, ECONOMIA E SEGURANÇA, RESPONSABILIDADE E ÉTICA.
          </p>
          <p className="text-sm md:text-base text-[#CCCCCC] leading-relaxed">
            CONTA COM UMA EQUIPE MULTIPROFISSIONAL, COMPETENTE E DISPOSTA A
            ATENDER PRONTAMENTE SUAS NECESSIDADES.
          </p>
        </div>
      </Container>
    </Section>
  );
}
