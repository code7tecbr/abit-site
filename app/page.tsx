import { Header } from "@/widgets/header";
import { Hero } from "@/widgets/hero";
import { ServicesSection } from "@/widgets/services-section";
import { AboutSection } from "@/widgets/about-section";
import { MissionSection } from "@/widgets/mission-section";
import { NewsletterSection } from "@/widgets/newsletter-section";
import { Footer } from "@/widgets/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <Hero />
        <ServicesSection />
        <AboutSection />
        <MissionSection />
        {/* <NewsletterSection /> */}
      </main>
      <Footer />
    </div>
  );
}
