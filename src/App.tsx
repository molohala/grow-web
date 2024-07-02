import {GrowColorProvider} from "./designsystem/foundation/color/GrowColorProvider";
import {GrowDarkScheme, GrowLightScheme} from "./designsystem/foundation/color/GrowColorSementic";
import {GlobalStyle} from "./style/globalStyle";
import useDarkTheme from "./hook/global/useDarkTheme";
import Preview from "./designsystem/preview/Preview";
import { ThemeContext } from "./context/ThemeContext";
// import IconPreview from "./designsystem/preview/IconPreview";
import Router from "./routes";
import {BrowserRouter} from "react-router-dom";

const App = () => {

    const [isDarkTheme, setIsDarkTheme] = useDarkTheme();

    return (
        <ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
            <GrowColorProvider theme={isDarkTheme ? GrowDarkScheme : GrowLightScheme}>
                <GlobalStyle/>
                <Preview/>
                {/*<IconPreview/>*/}
                {/*<BrowserRouter>*/}
                {/*    <Router/>*/}
                {/*</BrowserRouter>*/}
            </GrowColorProvider>
        </ThemeContext.Provider>
    );
};

export default App;