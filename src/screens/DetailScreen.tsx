import { useAuth } from "@/context/AuthContext";
import { Outfit } from "@/data/outfits";

interface DetailScreenProps {
  outfit: Outfit;
  onBack: () => void;
}

const DetailScreen = ({ outfit, onBack }: DetailScreenProps) => {
  const { toggleSave, isSaved } = useAuth();
  const saved = isSaved(outfit.id);

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      {/* Image */}
      <div className="relative h-[55vh] overflow-hidden">
        <img
          src={outfit.image}
          alt={outfit.name}
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

        {/* Back button */}
        <button
          onClick={onBack}
          className="absolute top-5 left-5 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground shadow-card hover:bg-background transition-all"
        >
          ←
        </button>

        {/* Save button */}
        <button
          onClick={() => toggleSave(outfit.id)}
          className={`absolute top-5 right-5 w-10 h-10 rounded-full flex items-center justify-center shadow-card transition-all duration-200 ${
            saved
              ? "bg-primary text-primary-foreground shadow-primary"
              : "bg-background/80 backdrop-blur-sm text-foreground hover:bg-background"
          }`}
        >
          {saved ? "❤️" : "🤍"}
        </button>

        {/* Aesthetic tag */}
        <div className="absolute bottom-5 left-5">
          <span className="text-xs px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-sm text-foreground font-medium">
            {outfit.aesthetic}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="px-5 pt-6 pb-10 max-w-2xl mx-auto">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h1 className="font-display text-3xl text-foreground leading-tight">{outfit.name}</h1>
        </div>

        <p className="text-muted-foreground text-sm mb-1 font-light italic">{outfit.mood}</p>

        <div className="flex flex-wrap gap-2 my-4">
          {outfit.tags.map((tag) => (
            <span key={tag} className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground">
              {tag}
            </span>
          ))}
        </div>

        <p className="text-foreground text-sm leading-relaxed mb-6">{outfit.description}</p>

        {/* Pieces */}
        <div className="bg-card rounded-2xl p-5 border border-border shadow-card mb-6">
          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4">The Pieces</p>
          <div className="space-y-2.5">
            {outfit.pieces.map((piece, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                <p className="text-sm text-foreground">{piece}</p>
              </div>
            ))}
          </div>
        </div>

        {/* AI note */}
        <div className="bg-primary-light rounded-2xl p-4 mb-6 border border-primary/20">
          <p className="text-xs text-primary font-medium mb-1">✦ AI Recommendation</p>
          <p className="text-xs text-foreground/70 leading-relaxed">
            This outfit was matched to your <strong>{outfit.aesthetic}</strong> aesthetic profile. 
            Our recommendation engine uses preference-based filtering. Future updates will include collaborative filtering and computer vision styling.
          </p>
        </div>

        {/* CTA */}
        <button
          onClick={() => toggleSave(outfit.id)}
          className={`w-full py-4 rounded-xl font-medium text-sm transition-all duration-200 ${
            saved
              ? "bg-muted text-muted-foreground border border-border"
              : "bg-gradient-primary text-primary-foreground shadow-primary hover:opacity-90"
          }`}
        >
          {saved ? "✓ Saved to Collection" : "Save to Collection ❤️"}
        </button>
      </div>
    </div>
  );
};

export default DetailScreen;
