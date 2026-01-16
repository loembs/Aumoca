import { brands, fuelTypes, transmissions } from "@/data/vehicles";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { X } from "lucide-react";

interface Filters {
  brand: string;
  fuel: string;
  transmission: string;
  priceRange: [number, number];
}

interface VehicleFiltersProps {
  filters: Filters;
  onFiltersChange: (filters: Filters) => void;
  onReset: () => void;
}

const VehicleFilters = ({ filters, onFiltersChange, onReset }: VehicleFiltersProps) => {
  const hasActiveFilters = 
    filters.brand !== "all" || 
    filters.fuel !== "all" || 
    filters.transmission !== "all" ||
    filters.priceRange[0] > 0 ||
    filters.priceRange[1] < 500000;

  return (
    <div className="bg-card rounded-lg p-6 shadow-card">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-display text-foreground">Filtres</h3>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onReset}
            className="text-muted-foreground hover:text-primary"
          >
            <X className="w-4 h-4 mr-1" />
            Réinitialiser
          </Button>
        )}
      </div>

      <div className="space-y-6">
        {/* Brand Filter */}
        <div>
          <label className="block text-sm font-medium text-muted-foreground mb-2">
            Marque
          </label>
          <Select
            value={filters.brand}
            onValueChange={(value) => onFiltersChange({ ...filters, brand: value })}
          >
            <SelectTrigger className="w-full bg-secondary border-border">
              <SelectValue placeholder="Toutes les marques" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Toutes les marques</SelectItem>
              {brands.map((brand) => (
                <SelectItem key={brand} value={brand}>
                  {brand}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Fuel Filter */}
        <div>
          <label className="block text-sm font-medium text-muted-foreground mb-2">
            Carburant
          </label>
          <Select
            value={filters.fuel}
            onValueChange={(value) => onFiltersChange({ ...filters, fuel: value })}
          >
            <SelectTrigger className="w-full bg-secondary border-border">
              <SelectValue placeholder="Tous les carburants" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tous les carburants</SelectItem>
              {fuelTypes.map((fuel) => (
                <SelectItem key={fuel} value={fuel}>
                  {fuel}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Transmission Filter */}
        <div>
          <label className="block text-sm font-medium text-muted-foreground mb-2">
            Transmission
          </label>
          <Select
            value={filters.transmission}
            onValueChange={(value) => onFiltersChange({ ...filters, transmission: value })}
          >
            <SelectTrigger className="w-full bg-secondary border-border">
              <SelectValue placeholder="Toutes transmissions" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Toutes transmissions</SelectItem>
              {transmissions.map((trans) => (
                <SelectItem key={trans} value={trans}>
                  {trans}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Price Range */}
        <div>
          <label className="block text-sm font-medium text-muted-foreground mb-4">
            Prix: {filters.priceRange[0].toLocaleString()}€ - {filters.priceRange[1].toLocaleString()}€
          </label>
          <Slider
            value={filters.priceRange}
            min={0}
            max={500000}
            step={5000}
            onValueChange={(value) => 
              onFiltersChange({ ...filters, priceRange: value as [number, number] })
            }
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default VehicleFilters;
