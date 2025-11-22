import { Container, Section } from "@/shared/ui";
import { NewsletterForm } from "@/features/newsletter-form";

export function NewsletterSection() {
  return (
    <Section className="bg-gradient-to-b from-black to-[#0A0A0A]">
      <Container>
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
            INSCREVA-SE PARA RECEBER NOVIDADES
          </h2>
          <p className="text-base md:text-lg text-[#CCCCCC]">
            Fique por dentro de vagas, cursos e oportunidades na construção
            civil.
          </p>
          <NewsletterForm />
        </div>
      </Container>
    </Section>
  );
}
