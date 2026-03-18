import outfitMinimal1 from "@/assets/outfit-minimal-1.jpg";
import outfitMinimal2 from "@/assets/outfit-minimal-2.jpg";
import outfitStreet1 from "@/assets/outfit-street-1.jpg";
import outfitStreet2 from "@/assets/outfit-street-2.jpg";
import outfitCoquette1 from "@/assets/outfit-coquette-1.jpg";
import outfitAcademia1 from "@/assets/outfit-academia-1.jpg";
import outfitFemaleMinimal1 from "@/assets/outfit-female-minimal-1.jpg";
import outfitFemaleCoquette2 from "@/assets/outfit-female-coquette-2.jpg";
import outfitFemaleAcademia2 from "@/assets/outfit-female-academia-2.jpg";
import outfitFemaleStreet1 from "@/assets/outfit-female-street-1.jpg";
import outfitMaleMinimal1 from "@/assets/outfit-male-minimal-1.jpg";
import outfitMaleMinimal2 from "@/assets/outfit-male-minimal-2.jpg";
import outfitMaleStreet1 from "@/assets/outfit-male-street-1.jpg";
import outfitMaleAcademia1 from "@/assets/outfit-male-academia-1.jpg";

export type Aesthetic = "Minimal" | "Streetwear" | "Coquette" | "Dark Academia";
export type OutfitGender = "Female" | "Male" | "Unisex";

export interface Outfit {
  id: number;
  aesthetic: Aesthetic;
  gender: OutfitGender;
  name: string;
  description: string;
  pieces: string[];
  mood: string;
  image: string;
  tags: string[];
}

export const outfits: Outfit[] = [
  // ── Female outfits ──────────────────────────────────────────
  {
    id: 1,
    aesthetic: "Minimal",
    gender: "Female",
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
    gender: "Female",
    name: "Linen Co-ord Set",
    description:
      "Crisp white linen blazer and wide-leg trousers — effortlessly elevated for any occasion.",
    pieces: ["Cropped linen blazer", "Wide-leg linen trousers", "White strappy sandals"],
    mood: "Polished · Airy · Minimal",
    image: outfitFemaleMinimal1,
    tags: ["Work", "Elevated", "Clean"],
  },
  {
    id: 3,
    aesthetic: "Minimal",
    gender: "Female",
    name: "Linen Weekend Look",
    description:
      "Soft linen textures for slow Sunday mornings — unhurried and beautifully simple.",
    pieces: ["Off-white linen shirt", "Cream straight trousers", "Beige suede loafers"],
    mood: "Relaxed · Warm · Elevated",
    image: outfitMinimal2,
    tags: ["Weekend", "Soft", "Elevated"],
  },
  {
    id: 4,
    aesthetic: "Streetwear",
    gender: "Female",
    name: "Urban Night Look",
    description:
      "Command the streets after dark. Oversized silhouettes with serious energy.",
    pieces: ["Oversized dark hoodie", "Cargo joggers", "Chunky black sneakers"],
    mood: "Bold · Edgy · Streetwise",
    image: outfitStreet1,
    tags: ["Night out", "Bold", "Urban"],
  },
  {
    id: 5,
    aesthetic: "Streetwear",
    gender: "Female",
    name: "Vintage Street Edit",
    description:
      "Vintage graphic tee, ripped baggy jeans, and chunky sneakers for serious street cred.",
    pieces: ["Oversized vintage graphic tee", "Ripped baggy jeans", "Platform sneakers", "Bucket hat"],
    mood: "Edgy · Casual · Fearless",
    image: outfitFemaleStreet1,
    tags: ["Vintage", "Casual", "Bold"],
  },
  {
    id: 6,
    aesthetic: "Streetwear",
    gender: "Female",
    name: "Y2K Street Edit",
    description:
      "Turn heads with vibrant Y2K energy. Maximalist streetwear meets early 2000s revival.",
    pieces: ["Graphic crop top", "Low-rise baggy jeans", "Platform sneakers", "Chunky accessories"],
    mood: "Fun · Loud · Retro",
    image: outfitStreet2,
    tags: ["Y2K", "Fun", "Statement"],
  },
  {
    id: 7,
    aesthetic: "Coquette",
    gender: "Female",
    name: "Soft Feminine Dream",
    description:
      "Delicate, dreamy, and irresistibly feminine. Pearls meet pleats in perfect harmony.",
    pieces: ["Pink puff-sleeve blouse", "Pleated midi skirt", "Ballet flats", "Pearl bracelet"],
    mood: "Dreamy · Soft · Romantic",
    image: outfitCoquette1,
    tags: ["Romantic", "Feminine", "Dreamy"],
  },
  {
    id: 8,
    aesthetic: "Coquette",
    gender: "Female",
    name: "Floral Bow Midi Dress",
    description:
      "A pink floral midi dress with dainty bow accents — pure coquette perfection.",
    pieces: ["Pink floral midi dress", "White Mary Jane shoes", "Dainty gold earrings"],
    mood: "Soft · Sweet · Feminine",
    image: outfitFemaleCoquette2,
    tags: ["Floral", "Dreamy", "Date"],
  },
  {
    id: 9,
    aesthetic: "Dark Academia",
    gender: "Female",
    name: "Library Hour",
    description:
      "Intellectual, moody, and richly layered. Dress like you belong in a Victorian library.",
    pieces: ["Houndstooth blazer", "Turtleneck sweater", "Tailored brown trousers", "Oxford shoes"],
    mood: "Intellectual · Moody · Rich",
    image: outfitAcademia1,
    tags: ["Bookish", "Layered", "Classic"],
  },
  {
    id: 10,
    aesthetic: "Dark Academia",
    gender: "Female",
    name: "Autumn Scholar",
    description:
      "A plaid blazer over a sleek turtleneck with knee-high boots — brooding and brilliant.",
    pieces: ["Plaid blazer", "Black turtleneck", "Black mini skirt", "Knee-high boots"],
    mood: "Moody · Layered · Intense",
    image: outfitFemaleAcademia2,
    tags: ["Autumn", "Moody", "Classic"],
  },

  // ── Male outfits ─────────────────────────────────────────────
  {
    id: 11,
    aesthetic: "Minimal",
    gender: "Male",
    name: "Sharp Minimal Edit",
    description:
      "White shirt, navy chinos, and clean white sneakers — timeless men's minimal done right.",
    pieces: ["White slim-fit shirt", "Navy slim chinos", "White leather sneakers", "Silver watch"],
    mood: "Clean · Sharp · Confident",
    image: outfitMaleMinimal1,
    tags: ["Everyday", "Smart", "Minimal"],
  },
  {
    id: 12,
    aesthetic: "Minimal",
    gender: "Male",
    name: "Weekend Casual",
    description:
      "Relaxed beige shirt and light jeans for the guy who keeps it effortlessly simple.",
    pieces: ["Beige relaxed shirt", "Light wash straight jeans", "White low-top sneakers"],
    mood: "Relaxed · Easy · Clean",
    image: outfitMaleMinimal2,
    tags: ["Weekend", "Casual", "Relaxed"],
  },
  {
    id: 13,
    aesthetic: "Streetwear",
    gender: "Male",
    name: "Street Hoodie Fit",
    description:
      "Oversized hoodie, cargo pants, and fresh kicks — the ultimate streetwear foundation.",
    pieces: ["Oversized graphic hoodie", "Cargo joggers", "Chunky sneakers", "Beanie"],
    mood: "Bold · Urban · Relaxed",
    image: outfitMaleStreet1,
    tags: ["Street", "Bold", "Urban"],
  },
  {
    id: 14,
    aesthetic: "Dark Academia",
    gender: "Male",
    name: "The Gentleman Scholar",
    description:
      "A camel overcoat, dark turtleneck, and corduroy trousers — deeply intellectual.",
    pieces: ["Camel overcoat", "Dark green turtleneck", "Brown corduroy trousers", "Oxford shoes"],
    mood: "Rich · Intellectual · Classic",
    image: outfitMaleAcademia1,
    tags: ["Classic", "Bookish", "Autumn"],
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
