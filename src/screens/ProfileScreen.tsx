import { useAuth } from "@/context/AuthContext";
import { outfits, aestheticLabels } from "@/data/outfits";

interface ProfileScreenProps {
  onRetakeQuiz: () => void;
  onOutfitClick: (outfit: (typeof outfits)[0]) => void;
}

const ProfileScreen = ({ onRetakeQuiz, onOutfitClick }: ProfileScreenProps) => {
  const { user, savedOutfits, logout } = useAuth();

  const saved = outfits.filter((o) => savedOutfits.includes(o.id));
  const info = user?.aesthetic ? aestheticLabels[user.aesthetic] : null;

  return (
    <div className="min-h-screen bg-background pb-10">
      {/* Header */}
      <div className="bg-gradient-hero px-5 pt-10 pb-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center text-2xl text-primary-foreground font-display shadow-primary">
              {user?.name?.[0]?.toUpperCase() || "?"}
            </div>
            <div>
              <h1 className="font-display text-2xl text-foreground">{user?.name}</h1>
              <p className="text-sm text-muted-foreground">{user?.email}</p>
            </div>
          </div>

          {info && (
            <div className="mt-5 p-4 bg-card/70 backdrop-blur-sm rounded-2xl border border-border">
              <p className="text-xs text-muted-foreground mb-1">Your Aesthetic</p>
              <div className="flex items-center gap-2">
                <span className="text-2xl">{info.emoji}</span>
                <div>
                  <p className="font-display text-xl text-foreground">{user?.aesthetic}</p>
                  <p className="text-xs text-muted-foreground">{info.subtitle}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-5 mt-6">
        {/* Stats */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-card rounded-2xl p-4 border border-border shadow-card text-center">
            <p className="font-display text-3xl text-foreground">{saved.length}</p>
            <p className="text-xs text-muted-foreground mt-1">Saved Outfits</p>
          </div>
          <div className="bg-card rounded-2xl p-4 border border-border shadow-card text-center">
            <p className="font-display text-3xl text-foreground">
              {user?.aesthetic ? "1" : "0"}
            </p>
            <p className="text-xs text-muted-foreground mt-1">Style Profiles</p>
          </div>
        </div>

        {/* Saved outfits */}
        <div className="mb-6">
          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">
            Saved Collection ({saved.length})
          </p>
          {saved.length === 0 ? (
            <div className="bg-card rounded-2xl p-8 border border-border text-center">
              <p className="text-2xl mb-2">🤍</p>
              <p className="text-sm text-muted-foreground">No saved outfits yet</p>
              <p className="text-xs text-muted-foreground mt-1">Tap the heart on any outfit to save it</p>
            </div>
          ) : (
            <div className="space-y-3">
              {saved.map((outfit) => (
                <button
                  key={outfit.id}
                  onClick={() => onOutfitClick(outfit)}
                  className="w-full flex items-center gap-4 p-3 bg-card rounded-2xl border border-border shadow-card hover:border-primary/30 transition-all text-left"
                >
                  <img
                    src={outfit.image}
                    alt={outfit.name}
                    className="w-14 h-14 rounded-xl object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">{outfit.name}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{outfit.aesthetic}</p>
                    <p className="text-xs text-muted-foreground italic mt-0.5 truncate">{outfit.mood}</p>
                  </div>
                  <span className="text-lg flex-shrink-0">→</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="space-y-3">
          <button
            onClick={onRetakeQuiz}
            className="w-full py-3.5 rounded-xl border border-border bg-card text-foreground text-sm font-medium hover:bg-muted transition-all flex items-center justify-center gap-2"
          >
            🔁 Retake Style Quiz
          </button>
          <button
            onClick={logout}
            className="w-full py-3.5 rounded-xl border border-destructive/30 bg-destructive/5 text-destructive text-sm font-medium hover:bg-destructive/10 transition-all"
          >
            🚪 Sign Out
          </button>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-8">
          AestheticX AI v1.0 · Style intelligence engine
        </p>
      </div>
    </div>
  );
};

export default ProfileScreen;
