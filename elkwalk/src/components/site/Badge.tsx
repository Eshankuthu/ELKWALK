import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "outline" | "secondary";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        {
          "bg-gradient-to-r from-blue-500 to-purple-600 text-white": variant === "default",
          "border border-gray-300 bg-transparent text-gray-700": variant === "outline",
          "bg-gray-100 text-gray-800": variant === "secondary",
        },
        className
      )}
    >
      {children}
    </span>
  );
}
