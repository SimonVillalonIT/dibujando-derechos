// stores/editionStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";

type EditionState = {
  currentEdition: "2024" | "2025";
  setEdition: (edition: "2024" | "2025") => void;
};

export const useEditionStore = create<EditionState>()(
  persist(
    (set) => ({
      currentEdition: "2025", // valor por defecto
      setEdition: (edition) => set({ currentEdition: edition }),
    }),
    {
      name: "edition-storage", // clave en localStorage
    }
  )
);
