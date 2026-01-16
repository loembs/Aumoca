import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src="https://res.cloudinary.com/dlna2kuo1/image/upload/v1768523947/AUMOCA_ykqmoq.png" alt="" className="w-12 h-12" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              to="/" 
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              Accueil
            </Link>
            <Link 
              to="/vehicles" 
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              Véhicules
            </Link>
            <a 
              href="#contact" 
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="https://wa.me/33600000000" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button className="bg-gradient-gold text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
                <Phone className="w-4 h-4 mr-2" />
                Nous Contacter
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              <Link 
                to="/" 
                className="text-foreground/80 hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link 
                to="/vehicles" 
                className="text-foreground/80 hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Véhicules
              </Link>
              <a 
                href="#contact" 
                className="text-foreground/80 hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <a 
                href="https://wa.me/33600000000" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button className="bg-gradient-gold text-primary-foreground font-semibold w-full mt-2">
                  <Phone className="w-4 h-4 mr-2" />
                  Nous Contacter
                </Button>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
