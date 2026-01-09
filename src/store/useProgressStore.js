import { create } from "zustand";

export const useProgressStore = create((set) => ({
  progress: 0,
  setProgress: (progress) => set({ progress }),
}));
