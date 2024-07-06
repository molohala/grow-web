import GrowColorProvider from "./provider/theme/GrowColorProvider";
import {GlobalStyle} from "./style/globalStyle";
// import Preview from "./designsystem/preview/Preview";
// import IconPreview from "./designsystem/preview/IconPreview";
import Router from "./routes";
import {BrowserRouter} from "react-router-dom";
import AppStateProvider from "./provider/appstate/AppStateProvider";

const App = () => {

    return (
        <GrowColorProvider>
            <AppStateProvider>
                <GlobalStyle/>
                {/*<Preview/>*/}
                {/*<IconPreview/>*/}
                <BrowserRouter>
                    <Router/>
                </BrowserRouter>
            </AppStateProvider>
        </GrowColorProvider>
    );
};

export default App;