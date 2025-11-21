import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        "w-full rounded-full border border-border bg-white/70 backdrop-blur-sm px-5 py-3 text-base",
        "focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40",
        "placeholder:text-muted-foreground",
        className
      )}
      {...props}
    />
  );
}
