import { useState, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VehicleCard from "@/components/VehicleCard";
import VehicleFilters from "@/components/VehicleFilters";
import { vehicles } from "@/data/vehicles";
import { SlidersHorizontal, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Filters {
  brand: string;
  fuel: string;
  transmission: string;
  priceRange: [number, number];
}

const initialFilters: Filters = {
  brand: "all",
  fuel: "all",
  transmission: "all",
  priceRange: [0, 500000],
};

const Vehicles = () => {
  const [filters, setFilters] = useState<Filters>(initialFilters);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const filteredVehicles = useMemo(() => {
    return vehicles.filter((vehicle) => {
      if (filters.brand !== "all" && vehicle.brand !== filters.brand) return false;
      if (filters.fuel !== "all" && vehicle.fuel !== filters.fuel) return false;
      if (filters.transmission !== "all" && vehicle.transmission !== filters.transmission) return false;
      if (vehicle.price < filters.priceRange[0] || vehicle.price > filters.priceRange[1]) return false;
      return true;
    });
  }, [filters]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-display text-foreground mb-2">
              NOS <span className="text-gradient">VÉHICULES</span>
            </h1>
            <p className="text-muted-foreground">
              {filteredVehicles.length} véhicule{filteredVehicles.length > 1 ? "s" : ""} disponible{filteredVehicles.length > 1 ? "s" : ""}
            </p>
          </div>

          {/* Mobile Filter Button */}
          <div className="lg:hidden mb-6">
            <Button
              variant="outline"
              onClick={() => setShowMobileFilters(true)}
              className="w-full border-border text-foreground"
            >
              <SlidersHorizontal className="w-4 h-4 mr-2" />
              Filtres
            </Button>
          </div>

          <div className="flex gap-8">
            {/* Desktop Filters Sidebar */}
            <aside className="hidden lg:block w-72 flex-shrink-0">
              <div className="sticky top-28">
                <VehicleFilters
                  filters={filters}
                  onFiltersChange={setFilters}
                  onReset={() => setFilters(initialFilters)}
                />
              </div>
            </aside>

            {/* Vehicles Grid */}
            <div className="flex-1">
              {filteredVehicles.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredVehicles.map((vehicle, index) => (
                    <VehicleCard key={vehicle.id} vehicle={vehicle} index={index} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20">
                  <p className="text-xl text-muted-foreground mb-4">
                    Aucun véhicule ne correspond à vos critères
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setFilters(initialFilters)}
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    Réinitialiser les filtres
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Mobile Filters Modal */}
      {showMobileFilters && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div 
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={() => setShowMobileFilters(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-background border-l border-border p-6 overflow-y-auto animate-slide-up">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-display text-foreground">Filtres</h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowMobileFilters(false)}
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
            <VehicleFilters
              filters={filters}
              onFiltersChange={setFilters}
              onReset={() => setFilters(initialFilters)}
            />
            <Button
              onClick={() => setShowMobileFilters(false)}
              className="w-full mt-6 bg-gradient-gold text-primary-foreground"
            >
              Voir {filteredVehicles.length} résultat{filteredVehicles.length > 1 ? "s" : ""}
            </Button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Vehicles;
