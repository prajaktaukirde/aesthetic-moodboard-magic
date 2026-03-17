import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { Outfit } from "@/data/outfits";
import LoginScreen from "@/screens/LoginScreen";
import QuizScreen from "@/screens/QuizScreen";
import HomeScreen from "@/screens/HomeScreen";
import DetailScreen from "@/screens/DetailScreen";
import ProfileScreen from "@/screens/ProfileScreen";

type AppScreen = "home" | "detail" | "profile";

const Index = () => {
  const { user, setAesthetic } = useAuth();
  const [screen, setScreen] = useState<AppScreen>("home");
  const [selectedOutfit, setSelectedOutfit] = useState<Outfit | null>(null);

  if (!user) return <LoginScreen />;
  if (!user.aesthetic) return <QuizScreen />;

  const handleOutfitClick = (outfit: Outfit) => {
    setSelectedOutfit(outfit);
    setScreen("detail");
  };

  return (
    <>
      {screen === "home" && (
        <HomeScreen
          onOutfitClick={handleOutfitClick}
          onProfileClick={() => setScreen("profile")}
        />
      )}
      {screen === "detail" && selectedOutfit && (
        <DetailScreen
          outfit={selectedOutfit}
          onBack={() => setScreen("home")}
        />
      )}
      {screen === "profile" && (
        <ProfileScreen
          onRetakeQuiz={() => setAesthetic(null)}
          onOutfitClick={(outfit) => {
            setSelectedOutfit(outfit);
            setScreen("detail");
          }}
        />
      )}

      {screen !== "detail" && (
        <nav className="fixed bottom-0 left-0 right-0 bg-background/90 backdrop-blur-md border-t border-border px-6 py-3 flex items-center justify-around">
          <button
            onClick={() => setScreen("home")}
            className={`flex flex-col items-center gap-1 transition-all ${
              screen === "home" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            <span className="text-xl">{screen === "home" ? "✦" : "○"}</span>
            <span className="text-[10px] font-medium">Feed</span>
          </button>
          <button
            onClick={() => setScreen("profile")}
            className={`flex flex-col items-center gap-1 transition-all ${
              screen === "profile" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            <span className="text-xl">{screen === "profile" ? "◆" : "◇"}</span>
            <span className="text-[10px] font-medium">Profile</span>
          </button>
        </nav>
      )}
    </>
  );
};

export default Index;
