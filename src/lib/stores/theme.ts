import { writable } from 'svelte/store';

function createThemeStore() {
  const { subscribe, set, update } = writable(true); // Start with dark mode by default

  return {
    subscribe,
    toggle: () => update(n => !n),
    set: (value: boolean) => set(value)
  };
}

export const isDarkMode = createThemeStore(); 