import {GrowColorScheme, ThemeProvider} from "styled-components";
import {ReactNode} from "react";

interface GrowColorProviderProps {
    children: ReactNode;
    theme: GrowColorScheme;
}

export const GrowColorProvider = (
    {
        children,
        theme
    }: GrowColorProviderProps
) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
};