import { Container, Section, SectionTitle } from "@/shared/ui";
import { valuesData, ValueBadge } from "@/entities/value";

const BadageInovacao = () => <ValueBadge key={valuesData[0].id} value={valuesData[0]} />
const BadageExecellencia = () => <ValueBadge key={valuesData[1].id} value={valuesData[1]} isInverter={true} />
const BadageProfissionalismo = () => <ValueBadge key={valuesData[2].id} value={valuesData[2]} />

const MensagemCentral = (props: { message: string }) => (
  <div className="text-center flex items-center justify-center">
    <p className="
      text-base md:text-lg lg:text-xl text-white leading-relaxed
      text-justify
      max-w-[50ch]
    ">
      {props.message.toUpperCase()}
    </p>
</div>);

export function AboutSection() {
  return (
    <Section id="sobre" className="bg-gradient-to-b from-black to-[#0A0A0A]">
      <Container>
        <SectionTitle>SOBRE NÓS</SectionTitle>

        <div className="flex flex-col items-center">
          <div className="flex lg:flex-row flex-col p-5 gap-10">
            <BadageInovacao />
            <MensagemCentral message="A ABIT PROJETOS & ENGENHARIA NASCE COM O INTUITO DE PROVER PROJETOS
              PERSONALIZADOS E SOLUÇÕES INOVADORAS COM EXCELÊNCIA." />
          </div>
          <div className="flex  lg:flex-row flex-col p-5 gap-20">
            <MensagemCentral message="ACREDITAMOS EM UM NOVO CONCEITO DE ENGENHARIA E ASSESSORIA, ALIANDO
              TÉCNICA E HUMANISMO, ECONOMIA E SEGURANÇA, RESPONSABILIDADE E ÉTICA." />
            <BadageExecellencia />
          </div>
          <div className="flex  lg:flex-row flex-col p-5 gap-30">
            <BadageProfissionalismo />
            <MensagemCentral message="CONTA COM UMA EQUIPE MULTIPROFISSIONAL, COMPETENTE E DISPOSTA A
              ATENDER PRONTAMENTE SUAS NECESSIDADES." />
          </div>
        </div>
      </Container>
    </Section>
  );
}
