import { useState } from "react";
import { useAuth, Aesthetic } from "@/context/AuthContext";
import { aestheticLabels } from "@/data/outfits";

const questions = [
  {
    id: "colors",
    question: "What colors speak to your soul?",
    emoji: "🎨",
    options: [
      { label: "Neutral & Muted", value: "Neutral", hint: "Beige, white, cream, grey" },
      { label: "Bold & Dark", value: "Bold", hint: "Black, deep tones, contrast" },
      { label: "Soft Pastels", value: "Pastel", hint: "Pink, lavender, sage, blush" },
      { label: "Warm & Earthy", value: "Earthy", hint: "Brown, rust, olive, caramel" },
    ],
  },
  {
    id: "silhouette",
    question: "How do you prefer your clothes to fit?",
    emoji: "👗",
    options: [
      { label: "Clean & Tailored", value: "Tailored", hint: "Structured, fitted, precise" },
      { label: "Oversized & Relaxed", value: "Oversized", hint: "Baggy, comfortable, loose" },
      { label: "Soft & Feminine", value: "Feminine", hint: "Flowy, delicate, romantic" },
      { label: "Layered & Textured", value: "Layered", hint: "Cozy, complex, intellectual" },
    ],
  },
  {
    id: "vibe",
    question: "What vibe do you want to channel?",
    emoji: "✨",
    options: [
      { label: "Quiet Luxury", value: "Quiet", hint: "Understated, refined, calm" },
      { label: "Street Energy", value: "Street", hint: "Urban, edgy, attitude" },
      { label: "Soft Romantic", value: "Romantic", hint: "Dreamy, sweet, ethereal" },
      { label: "Intellectual", value: "Intellectual", hint: "Classic, bookish, moody" },
    ],
  },
];

const determineAesthetic = (answers: Record<string, string>): Aesthetic => {
  const { colors, silhouette, vibe } = answers;

  if (
    vibe === "Romantic" || silhouette === "Feminine" || colors === "Pastel"
  ) return "Coquette";

  if (
    vibe === "Intellectual" || silhouette === "Layered" || colors === "Earthy"
  ) return "Dark Academia";

  if (
    vibe === "Street" || silhouette === "Oversized" || colors === "Bold"
  ) return "Streetwear";

  return "Minimal";
};

const QuizScreen = () => {
  const { setAesthetic } = useAuth();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [selected, setSelected] = useState<string | null>(null);
  const [result, setResult] = useState<Aesthetic>(null);
  const [revealing, setRevealing] = useState(false);

  const currentQuestion = questions[step];
  const isLast = step === questions.length - 1;

  const handleSelect = (value: string) => {
    setSelected(value);
  };

  const handleNext = () => {
    if (!selected) return;
    const newAnswers = { ...answers, [currentQuestion.id]: selected };
    setAnswers(newAnswers);
    setSelected(null);

    if (isLast) {
      setRevealing(true);
      const aesthetic = determineAesthetic(newAnswers);
      setTimeout(() => {
        setResult(aesthetic);
      }, 800);
    } else {
      setStep((s) => s + 1);
    }
  };

  const handleConfirm = () => {
    if (result) {
      setAesthetic(result);
    }
  };

  if (revealing && !result) {
    return (
      <div className="min-h-screen bg-gradient-hero flex items-center justify-center">
        <div className="text-center animate-fade-in">
          <div className="text-5xl mb-4 animate-bounce-gentle">✦</div>
          <p className="font-display text-2xl text-foreground">Discovering your aesthetic…</p>
        </div>
      </div>
    );
  }

  if (result) {
    const info = aestheticLabels[result];
    return (
      <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
        <div className="w-full max-w-sm text-center animate-scale-in">
          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4">Your Aesthetic is</p>
          <div
            className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 text-5xl shadow-soft"
            style={{ background: `${info.color}22`, border: `2px solid ${info.color}44` }}
          >
            {info.emoji}
          </div>
          <h1 className="font-display text-5xl text-foreground mb-2">{result}</h1>
          <p className="text-muted-foreground text-lg font-light mb-2">{info.subtitle}</p>

          <div className="bg-card rounded-2xl p-5 shadow-card border border-border mt-6 mb-8 text-left">
            <p className="text-xs text-muted-foreground uppercase tracking-wide mb-3">What this means for you</p>
            {result === "Minimal" && (
              <p className="text-sm text-foreground leading-relaxed">Clean lines, neutral palettes, and timeless pieces. You believe less is more and quality over quantity.</p>
            )}
            {result === "Streetwear" && (
              <p className="text-sm text-foreground leading-relaxed">Bold silhouettes, statement pieces, and urban edge. You dress to express and own every room you enter.</p>
            )}
            {result === "Coquette" && (
              <p className="text-sm text-foreground leading-relaxed">Soft, romantic, and beautifully feminine. Pastels, florals, and delicate details define your dreamy world.</p>
            )}
            {result === "Dark Academia" && (
              <p className="text-sm text-foreground leading-relaxed">Rich textures, warm earth tones, and intellectual layers. You dress like the protagonist of a Victorian novel.</p>
            )}
          </div>

          <button
            onClick={handleConfirm}
            className="w-full py-4 rounded-xl bg-gradient-primary text-primary-foreground font-medium shadow-primary hover:opacity-90 transition-all"
          >
            Explore My Feed →
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      <div className="w-full max-w-sm animate-fade-up">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs text-muted-foreground uppercase tracking-widest">Style Quiz</p>
            <p className="text-xs text-muted-foreground">{step + 1} / {questions.length}</p>
          </div>
          <div className="h-1.5 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-primary rounded-full transition-all duration-500"
              style={{ width: `${((step + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <div className="text-center mb-8">
          <div className="text-4xl mb-4">{currentQuestion.emoji}</div>
          <h2 className="font-display text-3xl text-foreground">{currentQuestion.question}</h2>
        </div>

        {/* Options */}
        <div className="space-y-3 mb-8">
          {currentQuestion.options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleSelect(option.value)}
              className={`w-full p-4 rounded-2xl border text-left transition-all duration-200 ${
                selected === option.value
                  ? "border-primary bg-primary-light shadow-primary"
                  : "border-border bg-card hover:border-primary/40 hover:bg-accent/30"
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-sm text-foreground">{option.label}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{option.hint}</p>
                </div>
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                    selected === option.value
                      ? "border-primary bg-primary"
                      : "border-border"
                  }`}
                >
                  {selected === option.value && (
                    <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>

        <button
          onClick={handleNext}
          disabled={!selected}
          className="w-full py-4 rounded-xl bg-gradient-primary text-primary-foreground font-medium shadow-primary hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
        >
          {isLast ? "Reveal My Aesthetic ✦" : "Next →"}
        </button>
      </div>
    </div>
  );
};

export default QuizScreen;
