import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OrderModal from "@/components/OrderModal";
import { vehicles } from "@/data/vehicles";
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft, 
  Fuel, 
  Gauge, 
  Calendar, 
  Zap, 
  Palette, 
  Settings,
  MessageCircle,
  Check
} from "lucide-react";

const VehicleDetail = () => {
  const { id } = useParams();
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  const vehicle = vehicles.find((v) => v.id === id);

  if (!vehicle) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-display text-foreground mb-4">Véhicule non trouvé</h1>
          <Link to="/vehicles">
            <Button className="bg-gradient-gold text-primary-foreground">
              Retour aux véhicules
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const specs = [
    { icon: Gauge, label: "Kilométrage", value: `${vehicle.mileage.toLocaleString()} km` },
    { icon: Fuel, label: "Carburant", value: vehicle.fuel },
    { icon: Zap, label: "Puissance", value: `${vehicle.power} ch` },
    { icon: Settings, label: "Transmission", value: vehicle.transmission },
    { icon: Calendar, label: "Année", value: vehicle.year.toString() },
    { icon: Palette, label: "Couleur", value: vehicle.color },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Link 
            to="/vehicles" 
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux véhicules
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Image Section */}
            <div className="space-y-4">
              <div className="aspect-[16/10] rounded-lg overflow-hidden shadow-card">
                <img
                  src={vehicle.image}
                  alt={`${vehicle.brand} ${vehicle.model}`}
                  className="w-full h-full object-cover"
                />
              </div>
              {vehicle.images.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {vehicle.images.map((img, index) => (
                    <div key={index} className="aspect-square rounded-md overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Details Section */}
            <div className="space-y-6">
              {/* Header */}
              <div>
                <p className="text-primary uppercase tracking-wider text-sm font-medium">
                  {vehicle.brand}
                </p>
                <h1 className="text-4xl md:text-5xl font-display text-foreground mt-1">
                  {vehicle.model}
                </h1>
                <p className="text-3xl font-display text-gradient mt-4">
                  {vehicle.price.toLocaleString()} €
                </p>
                <p className="text-muted-foreground text-sm">TVA incluse</p>
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">
                {vehicle.description}
              </p>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 gap-4">
                {specs.map((spec, index) => (
                  <div 
                    key={index} 
                    className="bg-card rounded-lg p-4 flex items-center gap-3"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <spec.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{spec.label}</p>
                      <p className="text-foreground font-medium">{spec.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Features */}
              <div>
                <h3 className="text-xl font-display text-foreground mb-4">Équipements</h3>
                <div className="grid grid-cols-2 gap-2">
                  {vehicle.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-muted-foreground">
                      <Check className="w-4 h-4 text-primary" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  onClick={() => setIsOrderModalOpen(true)}
                  className="flex-1 bg-gradient-gold text-primary-foreground font-semibold text-lg py-6 hover:opacity-90 transition-opacity"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Commander ce véhicule
                </Button>
                <a 
                  href={`https://wa.me/33600000000?text=${encodeURIComponent(`Bonjour, je suis intéressé par la ${vehicle.brand} ${vehicle.model} (${vehicle.year}) à ${vehicle.price.toLocaleString()}€`)}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg py-6"
                  >
                    Chat en direct
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <OrderModal
        vehicle={vehicle}
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
      />
    </div>
  );
};

export default VehicleDetail;
