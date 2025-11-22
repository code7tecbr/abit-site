import { cn } from "@/shared/lib";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "px-6 py-3 rounded-md font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FFD700]",
        variant === "primary" &&
          "bg-[#FFD700] text-black hover:bg-[#FFC700] active:scale-95",
        variant === "secondary" &&
          "bg-transparent border-2 border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-black",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
