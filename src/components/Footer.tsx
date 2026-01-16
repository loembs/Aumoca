import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-card border-t border-border py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-display text-gradient mb-4">AUMOCA</h3>
            <p className="text-muted-foreground">
              Votre partenaire de confiance pour l'achat de véhicules de luxe. 
              Qualité et service premium garantis.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-display text-foreground mb-4">Contact</h4>
            <div className="space-y-3">
              <a 
                href="tel:+33600000000" 
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5 text-primary" />
                +33 6 00 00 00 00
              </a>
              <a 
                href="mailto:contact@autoprestige.com" 
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5 text-primary" />
                contact@autoprestige.com
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                Paris, France
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xl font-display text-foreground mb-4">Suivez-nous</h4>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} AUMOCA. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
