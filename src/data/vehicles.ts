export interface Vehicle {
  id: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  fuel: 'Essence' | 'Diesel' | 'Hybride' | 'Électrique';
  transmission: 'Automatique' | 'Manuelle';
  power: number;
  image: string;
  images: string[];
  description: string;
  features: string[];
  color: string;
  interiorColor: string;
}

export const vehicles: Vehicle[] = [
  {
    id: "1",
    brand: "Mercedes-Benz",
    model: "S 63 AMG E Performance",
    year: 2024,
    price: 185000,
    mileage: 1200,
    fuel: "Hybride",
    transmission: "Automatique",
    power: 802,
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80",
      "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=800&q=80",
    ],
    description: "La nouvelle Mercedes-AMG S 63 E Performance combine luxe absolu et performances exceptionnelles.",
    features: ["Toit panoramique", "Sièges massants", "Sound System Burmester", "Conduite autonome niveau 3"],
    color: "Noir Obsidienne",
    interiorColor: "Cuir Nappa Blanc"
  },
  {
    id: "2",
    brand: "BMW",
    model: "M8 Competition",
    year: 2023,
    price: 156000,
    mileage: 8500,
    fuel: "Essence",
    transmission: "Automatique",
    power: 625,
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80",
    ],
    description: "BMW M8 Competition, le grand tourisme ultime avec des performances de supercar.",
    features: ["Carbone Package", "M Driver's Package", "Laser Light", "Harman Kardon"],
    color: "Frozen Black",
    interiorColor: "Cuir Merino Rouge"
  },
  {
    id: "3",
    brand: "Porsche",
    model: "911 Turbo S",
    year: 2024,
    price: 245000,
    mileage: 500,
    fuel: "Essence",
    transmission: "Automatique",
    power: 650,
    image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=800&q=80",
    ],
    description: "La Porsche 911 Turbo S définit les standards de la sportivité au quotidien.",
    features: ["PCCB", "Sport Chrono", "Toit en verre", "Bose Surround"],
    color: "Gris Craie",
    interiorColor: "Cuir Noir"
  },
  {
    id: "4",
    brand: "Audi",
    model: "RS e-tron GT",
    year: 2024,
    price: 142000,
    mileage: 3200,
    fuel: "Électrique",
    transmission: "Automatique",
    power: 646,
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80",
    ],
    description: "L'Audi RS e-tron GT représente l'avenir de la performance électrique.",
    features: ["Matrix LED", "Bang & Olufsen 3D", "Suspension pneumatique", "Charge rapide 270kW"],
    color: "Gris Daytona",
    interiorColor: "Alcantara Noir"
  },
  {
    id: "5",
    brand: "Lamborghini",
    model: "Huracán EVO",
    year: 2023,
    price: 295000,
    mileage: 4800,
    fuel: "Essence",
    transmission: "Automatique",
    power: 640,
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80",
    ],
    description: "La Lamborghini Huracán EVO, une supercar italienne au tempérament explosif.",
    features: ["Lifting System", "Carbone intégral", "Telemetry", "Sensonum Audio"],
    color: "Verde Mantis",
    interiorColor: "Alcantara Nero"
  },
  {
    id: "6",
    brand: "Range Rover",
    model: "Sport SVR",
    year: 2024,
    price: 168000,
    mileage: 2100,
    fuel: "Essence",
    transmission: "Automatique",
    power: 575,
    image: "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=800&q=80",
    ],
    description: "Le Range Rover Sport SVR combine luxe britannique et performances extrêmes.",
    features: ["Air Suspension", "Meridian Signature", "Toit panoramique", "Terrain Response 2"],
    color: "Santorini Black",
    interiorColor: "Windsor Leather"
  },
];

export const brands = [...new Set(vehicles.map(v => v.brand))];
export const fuelTypes = ['Essence', 'Diesel', 'Hybride', 'Électrique'] as const;
export const transmissions = ['Automatique', 'Manuelle'] as const;
