// store/authStore.ts
import * as SecureStore from "expo-secure-store";
import { create } from "zustand";

type User = {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
};

type AuthState = {
  user: User | null;

  setUser: (user: User | null) => void;

  saveUserSecure: (user: User) => Promise<void>;
  getUserSecure: () => Promise<User | null>;
  clearUserSecure: () => Promise<void>;

  savePassword: (password: string) => Promise<void>;
  getPassword: () => Promise<string | null>;
  clearPassword: () => Promise<void>;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,

  setUser: (user) => set({ user }),

  // Save full user object securely
  saveUserSecure: async (user: User) => {
    await SecureStore.setItemAsync("user_data", JSON.stringify(user));
  },

  getUserSecure: async () => {
    const raw = await SecureStore.getItemAsync("user_data");
    return raw ? JSON.parse(raw) : null;
  },

  clearUserSecure: async () => {
    await SecureStore.deleteItemAsync("user_data");
  },

  // Password is stored separately
  savePassword: async (password: string) => {
    await SecureStore.setItemAsync("password", password);
  },

  getPassword: async () => {
    return await SecureStore.getItemAsync("password");
  },

  clearPassword: async () => {
    await SecureStore.deleteItemAsync("password");
  },
}));
