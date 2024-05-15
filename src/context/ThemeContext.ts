import { createContext } from "react";

type A = {
    isDarkTheme: boolean;
    setIsDarkTheme: (isDarkTheme: boolean) => void;
}

export const ThemeContext = createContext<A | null>(null);