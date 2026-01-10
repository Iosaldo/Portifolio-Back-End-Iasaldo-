import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useProgressStore = create(
  persist(
    (set) => ({
      progress: 0,
      setProgress: (progress) => set({ progress }),
    }),
    {
      name: "portfolio-progress",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
