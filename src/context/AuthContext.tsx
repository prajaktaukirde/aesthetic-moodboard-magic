import React, { createContext, useContext, useState, ReactNode } from "react";

export type Aesthetic =
  | "Minimal"
  | "Streetwear"
  | "Coquette"
  | "Dark Academia"
  | null;

export type Gender = "Female" | "Male" | "Non-binary" | "Prefer not to say" | null;

interface User {
  name: string;
  email: string;
  aesthetic: Aesthetic;
  gender: Gender;
}

interface AuthContextType {
  user: User | null;
  savedOutfits: number[];
  login: (email: string, name?: string) => void;
  logout: () => void;
  setAesthetic: (aesthetic: Aesthetic) => void;
  setGender: (gender: Gender) => void;
  toggleSave: (outfitId: number) => void;
  isSaved: (outfitId: number) => boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [savedOutfits, setSavedOutfits] = useState<number[]>([]);

  const login = (email: string, name?: string) => {
    setUser({
      name: name || email.split("@")[0],
      email,
      aesthetic: null,
      gender: null,
    });
  };

  const logout = () => {
    setUser(null);
    setSavedOutfits([]);
  };

  const setAesthetic = (aesthetic: Aesthetic) => {
    if (!user) return;
    setUser((prev) => prev ? { ...prev, aesthetic } : null);
  };

  const setGender = (gender: Gender) => {
    if (!user) return;
    setUser((prev) => prev ? { ...prev, gender } : null);
  };

  const toggleSave = (outfitId: number) => {
    setSavedOutfits((prev) =>
      prev.includes(outfitId)
        ? prev.filter((id) => id !== outfitId)
        : [...prev, outfitId]
    );
  };

  const isSaved = (outfitId: number) => savedOutfits.includes(outfitId);

  return (
    <AuthContext.Provider
      value={{ user, savedOutfits, login, logout, setAesthetic, setGender, toggleSave, isSaved }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};
