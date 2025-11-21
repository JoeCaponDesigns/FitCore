import { Instagram, Facebook, Youtube, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Logo + Description */}
          <div>
            <a href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">F</span>
              </div>
              <span className="font-['var(--font-bebas)'] text-2xl tracking-wider">
                FitCore
              </span>
            </a>

            <p className="text-sm text-muted-foreground leading-relaxed">
              Transform your body and mind with expert personal training.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#services"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  href="#results"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Results
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>123 Fitness Street</li>
              <li>New York, NY 10001</li>
              <li>contact@fitcore.com</li>
              <li>(555) 123-4567</li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="font-bold mb-4">Follow Us</h3>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; 2025 FitCore Training. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
