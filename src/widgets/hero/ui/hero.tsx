"use client";

import { Container, Button } from "@/shared/ui";
import { siteConfig } from "@/shared/config";
import IconChat from "@/shared/images/whatsapp.png";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-[#1A1A1A] to-black overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,#FFD700_25%,#FFD700_50%,transparent_50%,transparent_75%,#FFD700_75%,#FFD700)] bg-[length:60px_60px]" />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />

      <Container className="relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            NOSSO SONHO É{" "}
            <span className="text-[#FFD700] block mt-2">
              REALIZAR O SEU!
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-[#CCCCCC] max-w-2xl mx-auto">
            Engenharia e Construção Civil com Excelência, Inovação e
            Profissionalismo
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              variant="primary"
              onClick={() =>
                window.open(siteConfig.social.whatsapp, "_blank")
              }
              className="min-w-[200px]"
            >
              FALE CONOSCO
            </Button>
            <Button
              variant="secondary"
              onClick={() =>
                document
                  .getElementById("servicos")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="min-w-[200px]"
            >
              NOSSOS SERVIÇOS
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-[#FFD700] rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-[#FFD700] rounded-full" />
          </div>
        </div> */}
      </Container>

      {/* WhatsApp Floating Button */}
      <a
        href={siteConfig.social.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white text-3xl shadow-lg hover:scale-110 transition-transform"
        aria-label="WhatsApp"
      >
        <img src={IconChat.src} alt="WhatsApp" className="w-10 h-10 " />
      </a>
    </section>
  );
}
