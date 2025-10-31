import { Plane } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center">
                  <Plane className="w-5 h-5 text-background" />
                </div>
                <div className="font-medium">Kuwait Travel</div>
              </div>
              <p className="text-sm text-background/70 font-light leading-relaxed">
                Your trusted partner for Kuwait travel and Nigerian passport services
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-medium mb-4">Quick Links</h4>
              <ul className="space-y-3 text-sm text-background/70 font-light">
                <li><a href="#services" className="hover:text-background transition-colors">Services</a></li>
                <li><a href="#contact" className="hover:text-background transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-background transition-colors">About</a></li>
                <li><a href="#" className="hover:text-background transition-colors">FAQ</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-medium mb-4">Services</h4>
              <ul className="space-y-3 text-sm text-background/70 font-light">
                <li>Kuwait Travel</li>
                <li>Passport Services</li>
                <li>Visa Support</li>
                <li>Travel Planning</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-medium mb-4">Contact</h4>
              <ul className="space-y-3 text-sm text-background/70 font-light">
                <li>+234 800 000 0000</li>
                <li>info@kuwaittravel.ng</li>
                <li>Lagos, Nigeria</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-background/10 text-center text-sm text-background/70 font-light">
            <p>&copy; {new Date().getFullYear()} Kuwait Travel & Passport Services. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
