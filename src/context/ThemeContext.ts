import { createContext } from "react";

export type ThemeContextType = {
    isDarkTheme: boolean;
    setIsDarkTheme: (isDarkTheme: boolean) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
    isDarkTheme: false,
    setIsDarkTheme: (isDarkTheme: boolean) => {}
});