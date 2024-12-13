import { create } from "zustand";

export const useLoginStore = create((set) => ({
  isLogin: null,
  setIsLogin: (value) => set(() => ({ isLogin: value })),
}));
