import { cn } from "@/shared/lib";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function Input({ label, error, className, ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-sm font-medium text-white">{label}</label>
      )}
      <input
        className={cn(
          "px-4 py-3 rounded-md bg-[#1A1A1A] border border-[#2A2A2A] text-white placeholder:text-[#666666] focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent transition-all",
          error && "border-red-500 focus:ring-red-500",
          className
        )}
        {...props}
      />
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
}
