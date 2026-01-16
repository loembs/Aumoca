import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 pt-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display text-foreground mb-6 animate-slide-up">
            <span className="text-gradient">AUMOCA</span>
          </h1>
          <p className="text-2xl md:text-3xl font-display text-foreground/80 mb-4 animate-slide-up" style={{ animationDelay: "50ms" }}>
            VOITURES DE PRESTIGE
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl animate-slide-up" style={{ animationDelay: "100ms" }}>
            Découvrez notre collection exclusive de véhicules haut de gamme. 
            Qualité, performance et élégance au service de votre passion automobile.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: "200ms" }}>
            <Link to="/vehicles">
              <Button 
                size="lg" 
                className="bg-gradient-gold text-primary-foreground font-semibold hover:opacity-90 transition-opacity text-lg px-8 py-6"
              >
                Voir les véhicules
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <a href="https://wa.me/33600000000" target="_blank" rel="noopener noreferrer">
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all text-lg px-8 py-6"
              >
                Contactez-nous
              </Button>
            </a>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
