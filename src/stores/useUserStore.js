import { create } from "zustand";

export const useUserStore = create((set) => ({
    userInfo: null,
    setUser: (userInfo) => set({ userInfo }),
    clearUser: () => set({ userInfo: null }),
}))