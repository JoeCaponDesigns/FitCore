import { useState, useEffect } from "react";
import Button from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center transition-transform group-hover:scale-105">
              <span className="text-primary-foreground font-bold text-xl">F</span>
            </div>
            <span className="font-['var(--font-bebas)'] text-2xl tracking-wider text-foreground">
              FitCore
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#services"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Services
            </a>

            <a
              href="#results"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Results
            </a>

            <a
              href="#about"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              About
            </a>

           <Button size="lg" variant="default" className="font-semibold">
  Start Training
</Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            <a
              href="#services"
              className="text-base font-medium text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </a>

            <a
              href="#results"
              className="text-base font-medium text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Results
            </a>

            <a
              href="#about"
              className="text-base font-medium text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>

            <Button size="lg" className="font-semibold w-full">
              Start Training
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
