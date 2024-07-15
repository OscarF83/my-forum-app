import { cn } from "@/lib/utils";

export default function Footer() {
  return (
    <footer
      className={cn("bg-stone-400 h-16 text-xs text-center", "pt-1 opacity-60")}
    >
      &copy; All-topics Forum team
    </footer>
  );
}
