import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "outline" | "secondary" | "success";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors",
        {
          "bg-gradient-to-r from-blue-600 to-purple-600 text-white": variant === "default",
          "border border-gray-300 bg-transparent text-gray-700 dark:border-gray-700 dark:text-gray-300": variant === "outline",
          "bg-gray-100 text-gray-800 dark:bg-white/5 dark:text-gray-300": variant === "secondary",
          "bg-green-50 text-green-600 dark:bg-green-500/10 dark:text-green-400": variant === "success",
        },
        className
      )}
    >
      {children}
    </span>
  );
}
