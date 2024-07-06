import { createContext } from "react";

export type DarkThemeContextType = {
    isDarkTheme: boolean;
    setIsDarkTheme: (isDarkTheme: boolean) => void;
};

export const DarkThemeContext = createContext<DarkThemeContextType>({
    isDarkTheme: false,
    setIsDarkTheme: (isDarkTheme: boolean) => {}
});