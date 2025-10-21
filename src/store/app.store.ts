import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type User = {
  user: string;
  mail: string;
  phone?: string;
};

type Survey = {
  fecha: string;
  'Pregunta 1': string;
  'Pregunta 2': string;
  'Pregunta 3': string;
  'Pregunta 4': string;
};

type AppState = {
  user: User | null;
  survey: Survey;
  login: (payload: User) => void;
  logout: () => void;
  setSurvey: (survey: Survey) => void;
};

const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      user: null,
      survey: {
        fecha: '',
        'Pregunta 1': '',
        'Pregunta 2': '',
        'Pregunta 3': '',
        'Pregunta 4': ''
      },

      login: (payload: User) => set(() => ({ user: payload })),
      logout: () => set(() => ({ user: null })),
      setSurvey: (survey: Survey) => set(() => ({ survey }))
    }),
    {
      name: 'app-storage'
    }
  )
);

export default useAppStore;
