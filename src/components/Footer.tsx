import { Leaf, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About Sowdha */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground">
                <Leaf className="h-6 w-6 text-primary" />
              </div>
              <span className="text-xl font-bold">Sowdha</span>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Your trusted partner for fresh groceries, delivered with care. Quality produce from farm to your doorstep.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-all duration-300 hover:translate-x-1 inline-block">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-all duration-300 hover:translate-x-1 inline-block">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-all duration-300 hover:translate-x-1 inline-block">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-all duration-300 hover:translate-x-1 inline-block">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic space-y-2 text-sm text-primary-foreground/80">
              <p>123 Market Street</p>
              <p>Green Valley, GV 12345</p>
              <p className="mt-3">
                <a href="mailto:hello@sowda.com" className="hover:text-primary-foreground transition-colors">
                  hello@sowdha.com
                </a>
              </p>
              <p>
                <a href="tel:+911234567890" className="hover:text-primary-foreground transition-colors">
                  +91 123 456 7890
                </a>
              </p>
            </address>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-all duration-300 hover:scale-110 hover:-translate-y-1 active:scale-95"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 transition-transform duration-300 hover:rotate-12" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-all duration-300 hover:scale-110 hover:-translate-y-1 active:scale-95"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 transition-transform duration-300 hover:rotate-12" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-all duration-300 hover:scale-110 hover:-translate-y-1 active:scale-95"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5 transition-transform duration-300 hover:rotate-12" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <p className="text-center text-sm text-primary-foreground/70">
            © 2025 Sowdha. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
