import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Vehicle } from "@/data/vehicles";
import { MessageCircle, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface OrderModalProps {
  vehicle: Vehicle;
  isOpen: boolean;
  onClose: () => void;
}

const OrderModal = ({ vehicle, isOpen, onClose }: OrderModalProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const adminWhatsAppNumber = "33600000000"; // Numéro WhatsApp de l'admin

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir au moins votre nom et téléphone.",
        variant: "destructive",
      });
      return;
    }

    // Créer le message WhatsApp
    const whatsappMessage = encodeURIComponent(
      `🚗 *Nouvelle Commande de Véhicule*\n\n` +
      `*Véhicule:* ${vehicle.brand} ${vehicle.model} (${vehicle.year})\n` +
      `*Prix:* ${vehicle.price.toLocaleString()} €\n` +
      `*Kilométrage:* ${vehicle.mileage.toLocaleString()} km\n\n` +
      `*Client:*\n` +
      `- Nom: ${formData.name}\n` +
      `- Téléphone: ${formData.phone}\n` +
      `- Email: ${formData.email || 'Non fourni'}\n\n` +
      `*Message:*\n${formData.message || 'Aucun message'}`
    );

    // Ouvrir WhatsApp avec le message
    const whatsappUrl = `https://wa.me/${adminWhatsAppNumber}?text=${whatsappMessage}`;
    window.open(whatsappUrl, "_blank");

    toast({
      title: "Commande envoyée !",
      description: "Votre demande a été transférée via WhatsApp. Nous vous contacterons rapidement.",
    });

    // Reset form and close modal
    setFormData({ name: "", phone: "", email: "", message: "" });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-card border-border max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display text-foreground">
            Commander ce véhicule
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {vehicle.brand} {vehicle.model} - {vehicle.price.toLocaleString()} €
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground">Nom complet *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Votre nom"
              className="bg-secondary border-border"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-foreground">Téléphone *</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+33 6 00 00 00 00"
              className="bg-secondary border-border"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="votre@email.com"
              className="bg-secondary border-border"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-foreground">Message (optionnel)</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Questions ou demandes spécifiques..."
              className="bg-secondary border-border resize-none"
              rows={3}
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1 border-border text-foreground hover:bg-secondary"
            >
              Annuler
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-gradient-gold text-primary-foreground font-semibold hover:opacity-90"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Envoyer via WhatsApp
            </Button>
          </div>
        </form>

        <p className="text-xs text-muted-foreground text-center mt-2">
          <Send className="w-3 h-3 inline mr-1" />
          Votre commande sera envoyée directement à notre équipe via WhatsApp
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default OrderModal;
