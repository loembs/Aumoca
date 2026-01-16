import Header from "@/components/Header";
import Hero from "@/components/Hero";
import VehicleCard from "@/components/VehicleCard";
import Footer from "@/components/Footer";
import { vehicles } from "@/data/vehicles";
import { ArrowRight, Award, ShieldCheck, Headphones } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  // Show only first 3 vehicles on homepage
  const featuredVehicles = vehicles.slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />

      {/* Featured Vehicles Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-display text-foreground mb-2">
                VÉHICULES EN <span className="text-gradient">VEDETTE</span>
              </h2>
              <p className="text-muted-foreground">
                Découvrez notre sélection de véhicules exceptionnels
              </p>
            </div>
            <Link to="/vehicles" className="mt-4 md:mt-0">
              <Button 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Voir tout
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredVehicles.map((vehicle, index) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display text-foreground text-center mb-12">
            POURQUOI <span className="text-gradient">NOUS CHOISIR</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-secondary rounded-lg animate-slide-up">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-gold flex items-center justify-center">
                <Award className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-display text-foreground mb-2">Qualité Premium</h3>
              <p className="text-muted-foreground">
                Tous nos véhicules sont rigoureusement sélectionnés et inspectés
              </p>
            </div>

            <div className="text-center p-8 bg-secondary rounded-lg animate-slide-up" style={{ animationDelay: "100ms" }}>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-gold flex items-center justify-center">
                <ShieldCheck className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-display text-foreground mb-2">Garantie Incluse</h3>
              <p className="text-muted-foreground">
                Profitez d'une garantie complète sur tous nos véhicules
              </p>
            </div>

            <div className="text-center p-8 bg-secondary rounded-lg animate-slide-up" style={{ animationDelay: "200ms" }}>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-gold flex items-center justify-center">
                <Headphones className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-display text-foreground mb-2">Service Réactif</h3>
              <p className="text-muted-foreground">
                Notre équipe vous accompagne à chaque étape via WhatsApp
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
