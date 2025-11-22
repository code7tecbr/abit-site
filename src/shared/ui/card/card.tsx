import { cn } from "@/shared/lib";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-lg bg-[#1A1A1A] border border-[#2A2A2A] p-6 transition-all duration-300",
        hover && "hover:border-[#FFD700] hover:shadow-lg hover:shadow-[#FFD700]/10",
        className
      )}
    >
      {children}
    </div>
  );
}
