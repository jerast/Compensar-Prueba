import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type User = {
  user: string;
  mail: string;
  phone?: string;
};

type Survey = string | null;

type AppState = {
  user: User | null;
  survey: Survey;
  login: (payload: User) => void;
  logout: () => void;
  setSurvey: (survey: Survey) => void;
};

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      user: null,
      survey: null,

      login: (payload: User) => set(() => ({ user: payload })),
      logout: () => set(() => ({ user: null })),
      setSurvey: (survey: Survey) => set(() => ({ survey }))
    }),
    {
      name: 'app-storage'
    }
  )
);
