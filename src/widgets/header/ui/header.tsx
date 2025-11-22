import { Container } from "@/shared/ui";
import { MobileMenu } from "@/features/mobile-menu";
import IconAbit from "@/shared/images/icone.png";
import IconAbitName from "@/shared/images/name.png";
import IcontAbitTitle from "@/shared/images/titulo.png";

const NAV_ITEMS = [
  { href: "#inicio", label: "INÍCIO" },
  { href: "#sobre", label: "NÓS" },
  { href: "#servicos", label: "SERVIÇOS" },
  { href: "#missao", label: "MISSÃO" },
  { href: "#contato", label: "CONTATO" },
];

const logo= () => {
  return (
  <a href="#inicio" className="flex items-center">
    <div className="w-12 flex items-center">
      <img src={IconAbit.src} alt="ABIT Logo" className="w-8" />
    </div>
    <div className="flex flex-col">
      <div className="">
        <img
          src={IconAbitName.src}
          alt="ABIT Name"
          className="h-8"
        />
      </div>
      <div className="">
        <img
          src={IcontAbitTitle.src}
          alt="ABIT Title"
          className="h-3 mt-2"
        />
      </div>
    </div>
  </a>
  );
}

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-[#2A2A2A]">
      <Container>
        <div className="flex items-center justify-between h-20">
          {logo()}
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
