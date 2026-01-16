import { Link } from "react-router-dom";
import { Fuel, Gauge, Calendar, Zap } from "lucide-react";
import { Vehicle } from "@/data/vehicles";

interface VehicleCardProps {
  vehicle: Vehicle;
  index: number;
}

const VehicleCard = ({ vehicle, index }: VehicleCardProps) => {
  return (
    <Link 
      to={`/vehicle/${vehicle.id}`}
      className="group block animate-slide-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="bg-card rounded-lg overflow-hidden shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-2">
        {/* Image Container */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={vehicle.image}
            alt={`${vehicle.brand} ${vehicle.model}`}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Year Badge */}
          <div className="absolute top-4 left-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
            {vehicle.year}
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Brand & Model */}
          <div className="mb-3">
            <p className="text-muted-foreground text-sm uppercase tracking-wider">
              {vehicle.brand}
            </p>
            <h3 className="text-xl font-display text-foreground group-hover:text-primary transition-colors">
              {vehicle.model}
            </h3>
          </div>

          {/* Specs Grid */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <Gauge className="w-4 h-4 text-primary" />
              <span>{vehicle.mileage.toLocaleString()} km</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <Fuel className="w-4 h-4 text-primary" />
              <span>{vehicle.fuel}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <Zap className="w-4 h-4 text-primary" />
              <span>{vehicle.power} ch</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <Calendar className="w-4 h-4 text-primary" />
              <span>{vehicle.transmission}</span>
            </div>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between pt-3 border-t border-border">
            <span className="text-2xl font-display text-gradient">
              {vehicle.price.toLocaleString()} €
            </span>
            <span className="text-sm text-muted-foreground">TVA incluse</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VehicleCard;
