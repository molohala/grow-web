import {ButtonType} from "./designsystem/component/button/type/ButtonType";
import {GrowColorProvider} from "./designsystem/foundation/color/GrowColorProvider";
import {GrowDarkScheme, GrowLightScheme} from "./designsystem/foundation/color/GrowColorSementic";
import {GlobalStyle} from "./util/globalStyle";
import {useDarkTheme} from "./hook/useDarkTheme";
import Preview from "./designsystem/preview/Preview";

const App = () => {

    const [isDarkTheme] = useDarkTheme();

    return (
        <GrowColorProvider theme={isDarkTheme ? GrowDarkScheme : GrowLightScheme}>
            <GlobalStyle/>
            <Preview/>
        </GrowColorProvider>
    );
};

export default App;