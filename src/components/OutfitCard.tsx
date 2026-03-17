import { useAuth } from "@/context/AuthContext";
import { Outfit } from "@/data/outfits";

interface OutfitCardProps {
  outfit: Outfit;
  onClick: () => void;
}

const OutfitCard = ({ outfit, onClick }: OutfitCardProps) => {
  const { toggleSave, isSaved } = useAuth();
  const saved = isSaved(outfit.id);

  const handleSave = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleSave(outfit.id);
  };

  return (
    <div
      onClick={onClick}
      className="group cursor-pointer bg-card rounded-2xl overflow-hidden border border-border shadow-card hover:shadow-soft hover:-translate-y-1 transition-all duration-300"
    >
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={outfit.image}
          alt={outfit.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />

        {/* Save button */}
        <button
          onClick={handleSave}
          className={`absolute top-2.5 right-2.5 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 text-sm ${
            saved
              ? "bg-primary shadow-primary scale-110"
              : "bg-background/70 backdrop-blur-sm hover:bg-background"
          }`}
        >
          {saved ? "❤️" : "🤍"}
        </button>

        {/* Aesthetic badge */}
        <div className="absolute bottom-2.5 left-2.5">
          <span className="text-[10px] px-2 py-1 rounded-full bg-background/70 backdrop-blur-sm text-foreground font-medium">
            {outfit.aesthetic}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="p-3">
        <p className="text-sm font-medium text-foreground leading-tight line-clamp-2">{outfit.name}</p>
        <p className="text-[11px] text-muted-foreground mt-1 italic">{outfit.mood}</p>
      </div>
    </div>
  );
};

export default OutfitCard;
