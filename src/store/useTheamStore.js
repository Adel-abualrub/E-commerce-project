import { create } from "zustand";

const useThemeStore = create((set) => ({
  mode: 'light',
  ToggleTheme: () => {
    set((state) => ({ 
      mode: state.mode === 'light' ? 'dark' : 'light',
    })); 
  },
}));

export default useThemeStore;