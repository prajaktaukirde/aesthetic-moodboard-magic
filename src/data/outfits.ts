import outfitMinimal1 from "@/assets/outfit-minimal-1.jpg";
import outfitMinimal2 from "@/assets/outfit-minimal-2.jpg";
import outfitStreet1 from "@/assets/outfit-street-1.jpg";
import outfitStreet2 from "@/assets/outfit-street-2.jpg";
import outfitCoquette1 from "@/assets/outfit-coquette-1.jpg";
import outfitAcademia1 from "@/assets/outfit-academia-1.jpg";

export type Aesthetic = "Minimal" | "Streetwear" | "Coquette" | "Dark Academia";

export interface Outfit {
  id: number;
  aesthetic: Aesthetic;
  name: string;
  description: string;
  pieces: string[];
  mood: string;
  image: string;
  tags: string[];
}

export const outfits: Outfit[] = [
  {
    id: 1,
    aesthetic: "Minimal",
    name: "Minimal College Outfit",
    description:
      "A clean, effortless look perfect for campus. Let simplicity speak louder than noise.",
    pieces: ["White boxy tee", "Light wash straight jeans", "White leather sneakers"],
    mood: "Clean · Quiet · Confident",
    image: outfitMinimal1,
    tags: ["Campus", "Casual", "Everyday"],
  },
  {
    id: 2,
    aesthetic: "Minimal",
    name: "Linen Weekend Look",
    description:
      "Soft linen textures for slow Sunday mornings — unhurried and beautifully simple.",
    pieces: ["Off-white linen shirt", "Cream straight trousers", "Beige suede loafers"],
    mood: "Relaxed · Warm · Elevated",
    image: outfitMinimal2,
    tags: ["Weekend", "Soft", "Elevated"],
  },
  {
    id: 3,
    aesthetic: "Streetwear",
    name: "Urban Night Look",
    description:
      "Command the streets after dark. Oversized silhouettes with serious energy.",
    pieces: ["Oversized dark hoodie", "Cargo joggers", "Chunky black sneakers"],
    mood: "Bold · Edgy · Streetwise",
    image: outfitStreet1,
    tags: ["Night out", "Bold", "Urban"],
  },
  {
    id: 4,
    aesthetic: "Streetwear",
    name: "Y2K Street Edit",
    description:
      "Turn heads with vibrant Y2K energy. Maximalist streetwear meets early 2000s revival.",
    pieces: ["Graphic crop top", "Low-rise baggy jeans", "Platform sneakers", "Chunky accessories"],
    mood: "Fun · Loud · Retro",
    image: outfitStreet2,
    tags: ["Y2K", "Fun", "Statement"],
  },
  {
    id: 5,
    aesthetic: "Coquette",
    name: "Soft Feminine Dream",
    description:
      "Delicate, dreamy, and irresistibly feminine. Pearls meet pleats in perfect harmony.",
    pieces: ["Pink puff-sleeve blouse", "Pleated midi skirt", "Ballet flats", "Pearl bracelet"],
    mood: "Dreamy · Soft · Romantic",
    image: outfitCoquette1,
    tags: ["Romantic", "Feminine", "Dreamy"],
  },
  {
    id: 6,
    aesthetic: "Dark Academia",
    name: "Library Hour",
    description:
      "Intellectual, moody, and richly layered. Dress like you belong in a Victorian library.",
    pieces: ["Houndstooth blazer", "Turtleneck sweater", "Tailored brown trousers", "Oxford shoes"],
    mood: "Intellectual · Moody · Rich",
    image: outfitAcademia1,
    tags: ["Bookish", "Layered", "Classic"],
  },
];

export const aestheticLabels: Record<Aesthetic, { emoji: string; subtitle: string; color: string }> = {
  Minimal: {
    emoji: "🤍",
    subtitle: "Clean Minimalist",
    color: "hsl(40 30% 60%)",
  },
  Streetwear: {
    emoji: "🖤",
    subtitle: "Urban Edge",
    color: "hsl(220 15% 40%)",
  },
  Coquette: {
    emoji: "🌸",
    subtitle: "Soft Romantic",
    color: "hsl(340 55% 65%)",
  },
  "Dark Academia": {
    emoji: "📚",
    subtitle: "Intellectual Moody",
    color: "hsl(30 30% 35%)",
  },
};
