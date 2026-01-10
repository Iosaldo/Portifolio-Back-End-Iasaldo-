import { create } from "zustand";

const useLanguageStore = create((set) => ({
  language: "pt", // idioma padrão
  setLanguage: (language) => set({ language }),
}));

export default useLanguageStore;
