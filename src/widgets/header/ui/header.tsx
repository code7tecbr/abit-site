import { Container } from "@/shared/ui";
import { MobileMenu } from "@/features/mobile-menu";

const NAV_ITEMS = [
  { href: "#inicio", label: "INÍCIO" },
  { href: "#sobre", label: "NÓS" },
  { href: "#servicos", label: "SERVIÇOS" },
  { href: "#missao", label: "MISSÃO" },
  { href: "#contato", label: "CONTATO" },
];

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-[#2A2A2A]">
      <Container>
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2">
            <div className="w-12 h-12 bg-gradient-to-br from-[#FFD700] to-[#FFC700] rounded-lg flex items-center justify-center font-bold text-black text-xl">
              AB
            </div>
            <div className="flex flex-col">
              <span className="text-[#FFD700] font-bold text-lg leading-tight">
                ABIT
              </span>
              <span className="text-white text-xs">
                Projetos & Engenharia
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white hover:text-[#FFD700] transition-colors font-medium text-sm"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu */}
          <MobileMenu navItems={NAV_ITEMS} />
        </div>
      </Container>
    </header>
  );
}
