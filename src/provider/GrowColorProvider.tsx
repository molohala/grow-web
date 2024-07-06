import {ThemeProvider} from "styled-components";
import {ReactNode} from "react";
import useDarkTheme from "../hook/global/useDarkTheme";
import {GrowDarkScheme, GrowLightScheme} from "../designsystem/foundation/color/GrowColorSementic";
import {ThemeContext} from "../context/ThemeContext";

interface GrowColorProviderProps {
    children: ReactNode;
}

const GrowColorProvider = (
    {
        children,
    }: GrowColorProviderProps
) => {
    const [isDarkTheme, setIsDarkTheme] = useDarkTheme();

    return (
        <ThemeContext.Provider value={{isDarkTheme, setIsDarkTheme}}>
            <ThemeProvider theme={isDarkTheme ? GrowDarkScheme : GrowLightScheme}>{children}</ThemeProvider>
        </ThemeContext.Provider>
    );
};

export default GrowColorProvider;