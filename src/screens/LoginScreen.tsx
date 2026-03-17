import { useState } from "react";
import { useAuth } from "@/context/AuthContext";

type Screen = "login" | "signup";

const LoginScreen = () => {
  const { login } = useAuth();
  const [screen, setScreen] = useState<Screen>("login");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    if (screen === "signup" && !name) {
      setError("Please enter your name.");
      return;
    }
    setError("");
    login(email, name || undefined);
  };

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      {/* Decorative blobs */}
      <div
        className="fixed top-[-80px] right-[-80px] w-72 h-72 rounded-full opacity-30 pointer-events-none"
        style={{ background: "hsl(340 60% 85%)", filter: "blur(60px)" }}
      />
      <div
        className="fixed bottom-[-60px] left-[-60px] w-56 h-56 rounded-full opacity-25 pointer-events-none"
        style={{ background: "hsl(150 40% 80%)", filter: "blur(50px)" }}
      />

      <div className="w-full max-w-sm animate-scale-in">
        {/* Logo */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-primary shadow-primary mb-4">
            <span className="text-2xl">✦</span>
          </div>
          <h1 className="font-display text-4xl text-foreground tracking-tight">AestheticX</h1>
          <p className="text-muted-foreground text-sm mt-1 font-light">Discover your personal style identity</p>
        </div>

        {/* Card */}
        <div className="bg-card rounded-3xl p-8 shadow-soft border border-border">
          {/* Tabs */}
          <div className="flex gap-1 p-1 bg-muted rounded-xl mb-6">
            {(["login", "signup"] as Screen[]).map((s) => (
              <button
                key={s}
                onClick={() => { setScreen(s); setError(""); }}
                className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all duration-200 capitalize ${
                  screen === s
                    ? "bg-card text-foreground shadow-card"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {s === "login" ? "Sign In" : "Sign Up"}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {screen === "signup" && (
              <div className="animate-fade-up">
                <label className="block text-xs font-medium text-muted-foreground mb-1.5 uppercase tracking-wide">
                  Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                />
              </div>
            )}

            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-1.5 uppercase tracking-wide">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-1.5 uppercase tracking-wide">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
              />
            </div>

            {error && (
              <p className="text-destructive text-xs animate-fade-up">{error}</p>
            )}

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-primary text-primary-foreground font-medium text-sm shadow-primary hover:opacity-90 active:scale-[0.98] transition-all duration-200 mt-2"
            >
              {screen === "login" ? "Continue →" : "Create Account →"}
            </button>
          </form>

          <div className="mt-6">
            <div className="relative flex items-center gap-3">
              <div className="flex-1 h-px bg-border" />
              <span className="text-xs text-muted-foreground">or</span>
              <div className="flex-1 h-px bg-border" />
            </div>
            <button
              onClick={() => login("demo@aestheticx.app", "Aesthetic User")}
              className="w-full mt-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm font-medium hover:bg-muted transition-all duration-200 flex items-center justify-center gap-2"
            >
              <span>🎨</span> Try Demo
            </button>
          </div>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-6">
          AI-powered style recommendations ✦ Curated for you
        </p>
      </div>
    </div>
  );
};

export default LoginScreen;
