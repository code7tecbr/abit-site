import { Container } from "@/shared/ui";
import { siteConfig } from "@/shared/config";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contato" className="bg-[#0A0A0A] border-t border-[#2A2A2A] py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-[#FFD700] font-bold text-lg">
              {siteConfig.name}
            </h3>
            <p className="text-sm text-[#CCCCCC]">{siteConfig.description}</p>
          </div>

          {/* Address */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Endereço</h4>
            <p className="text-sm text-[#CCCCCC]">
              {siteConfig.contact.address}
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Contato</h4>
            <div className="space-y-2">
              {siteConfig.contact.phones.map((phone, index) => (
                <p key={index} className="text-sm text-[#CCCCCC]">
                  {phone}
                </p>
              ))}
              <p className="text-sm text-[#CCCCCC]">
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-[#FFD700] transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Links Rápidos</h4>
            <nav className="flex flex-col gap-2">
              <a
                href="#inicio"
                className="text-sm text-[#CCCCCC] hover:text-[#FFD700] transition-colors"
              >
                Início
              </a>
              <a
                href="#sobre"
                className="text-sm text-[#CCCCCC] hover:text-[#FFD700] transition-colors"
              >
                Sobre Nós
              </a>
              <a
                href="#servicos"
                className="text-sm text-[#CCCCCC] hover:text-[#FFD700] transition-colors"
              >
                Serviços
              </a>
              <a
                href="#missao"
                className="text-sm text-[#CCCCCC] hover:text-[#FFD700] transition-colors"
              >
                Missão
              </a>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#2A2A2A] pt-8 text-center">
          <p className="text-sm text-[#666666]">
            © {currentYear} {siteConfig.name}. Todos os direitos reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
}
