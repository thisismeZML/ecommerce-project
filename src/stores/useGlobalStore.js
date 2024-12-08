import { create } from "zustand";

export const useGlobalStore = create((set) => ({
  isDrawerOpen: false,
  setIsDrawerOpen: () =>
    set((state) => ({
      isDrawerOpen: !state.isDrawerOpen,
    })),
}));
