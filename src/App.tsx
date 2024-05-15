import {GrowColorProvider} from "./designsystem/foundation/color/GrowColorProvider";
import {GrowDarkScheme, GrowLightScheme} from "./designsystem/foundation/color/GrowColorSementic";
import {GlobalStyle} from "./util/globalStyle";
import {useDarkTheme} from "./hook/useDarkTheme";
import Preview from "./designsystem/preview/Preview";
import { ThemeContext } from "./context/ThemeContext";
import IconPreview from "./designsystem/preview/IconPreview";

const App = () => {

    const [isDarkTheme, setIsDarkTheme] = useDarkTheme();

    return (
        <ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
            <GrowColorProvider theme={isDarkTheme ? GrowDarkScheme : GrowLightScheme}>
                <GlobalStyle/>
                <Preview/>
                {/*<IconPreview/>*/}
            </GrowColorProvider>
        </ThemeContext.Provider>
    );
};

export default App;