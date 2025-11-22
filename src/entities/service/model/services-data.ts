import { Ruler, HardHat, Lightbulb, Droplets, Flame, Box } from "lucide-react";
import type { Service } from "./types";

export const servicesData: Service[] = [
  {
    id: "1",
    title: "PROJETOS ARQUITETÔNICOS",
    icon: Ruler,
    description: "Projetos arquitetônicos personalizados e funcionais",
  },
  {
    id: "2",
    title: "PROJETOS ESTRUTURAIS",
    icon: HardHat,
    description: "Estruturas seguras e eficientes",
  },
  {
    id: "3",
    title: "PROJETO ELÉTRICO",
    icon: Lightbulb,
    description: "Instalações elétricas planejadas e seguras",
  },
  {
    id: "4",
    title: "PROJETOS HIDROSSANITÁRIOS",
    icon: Droplets,
    description: "Sistemas hidráulicos e sanitários otimizados",
  },
  {
    id: "5",
    title: "PROJETOS COMB. A INCÊNDIO",
    icon: Flame,
    description: "Segurança contra incêndio conforme normas",
  },
  {
    id: "6",
    title: "RENDERIZAÇÕES E 3D",
    icon: Box,
    description: "Visualização realista de projetos",
  },
];
