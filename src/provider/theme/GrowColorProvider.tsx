import {ReactNode} from "react";
import {ThemeProvider} from "styled-components";

import useDarkTheme from "@hook/global/useDarkTheme";

import {GrowDarkScheme, GrowLightScheme} from "@designsystem/foundation/color/GrowColorSementic";
import {DarkThemeContext} from "@provider/theme/DarkThemeContext";

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
        <DarkThemeContext.Provider value={{isDarkTheme, setIsDarkTheme}}>
            <ThemeProvider theme={isDarkTheme ? GrowDarkScheme : GrowLightScheme}>{children}</ThemeProvider>
        </DarkThemeContext.Provider>
    );
};

export default GrowColorProvider;