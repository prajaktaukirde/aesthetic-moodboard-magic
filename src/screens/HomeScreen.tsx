import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { outfits, Outfit, aestheticLabels } from "@/data/outfits";
import OutfitCard from "@/components/OutfitCard";
import type { Aesthetic } from "@/context/AuthContext";

const aestheticOptions: (Aesthetic | "All")[] = ["All", "Minimal", "Streetwear", "Coquette", "Dark Academia"];

interface HomeScreenProps {
  onOutfitClick: (outfit: Outfit) => void;
  onProfileClick: () => void;
}

const HomeScreen = ({ onOutfitClick, onProfileClick }: HomeScreenProps) => {
  const { user } = useAuth();
  const [filter, setFilter] = useState<Aesthetic | "All">(
    user?.aesthetic ?? "All"
  );

  const filtered =
    filter === "All"
      ? outfits
      : outfits.filter((o) => o.aesthetic === filter);

  const greeting = () => {
    const h = new Date().getHours();
    if (h < 12) return "Good morning";
    if (h < 18) return "Good afternoon";
    return "Good evening";
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-md border-b border-border px-5 py-4">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <div>
            <p className="text-xs text-muted-foreground">{greeting()}</p>
            <h1 className="font-display text-2xl text-foreground leading-none">
              {user?.name?.split(" ")[0] || "Explorer"}
            </h1>
          </div>
          <div className="flex items-center gap-3">
            {user?.aesthetic && (
              <span className="text-xs px-3 py-1.5 rounded-full bg-primary-light text-primary font-medium">
                {aestheticLabels[user.aesthetic].emoji} {user.aesthetic}
              </span>
            )}
            <button
              onClick={onProfileClick}
              className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-sm font-medium text-foreground hover:bg-accent transition-all"
            >
              {user?.name?.[0]?.toUpperCase() || "?"}
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-5">
        {/* Hero section */}
        <div className="py-6">
          <p className="font-display text-4xl text-foreground leading-tight">
            Outfits <span className="italic text-primary">curated</span>
            <br />for your vibe.
          </p>
          <p className="text-muted-foreground text-sm mt-2">
            {filtered.length} looks · AI-matched to your style
          </p>
        </div>

        {/* Filter chips */}
        <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-hide -mx-5 px-5">
          {aestheticOptions.map((opt) => (
            <button
              key={opt ?? "All"}
              onClick={() => setFilter(opt)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 border ${
                filter === opt
                  ? "bg-foreground text-background border-foreground"
                  : "bg-card text-muted-foreground border-border hover:border-foreground/30"
              }`}
            >
              {opt === "All" ? "✦ All" : `${opt === "Minimal" ? "🤍" : opt === "Streetwear" ? "🖤" : opt === "Coquette" ? "🌸" : "📚"} ${opt}`}
            </button>
          ))}
        </div>

        {/* Outfit grid */}
        <div className="grid grid-cols-2 gap-4 py-6">
          {filtered.map((outfit, i) => (
            <div
              key={outfit.id}
              className="animate-fade-up"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <OutfitCard outfit={outfit} onClick={() => onOutfitClick(outfit)} />
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-3xl mb-3">🌿</p>
            <p className="font-display text-xl text-foreground">No outfits yet</p>
            <p className="text-sm text-muted-foreground mt-1">Check back soon for new drops</p>
          </div>
        )}

        <div className="pb-8 text-center">
          <p className="text-xs text-muted-foreground">
            ✦ AestheticX AI · Rule-based recommendation engine
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
