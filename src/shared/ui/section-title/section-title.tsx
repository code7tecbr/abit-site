import { cn } from "@/shared/lib";

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionTitle({ children, className }: SectionTitleProps) {
  return (
    <h2
      className={cn(
        "mb-8 md:mb-12 text-center text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide text-[#FFD700]",
        className
      )}
    >
      {children}
    </h2>
  );
}
