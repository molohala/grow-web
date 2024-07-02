import {GrowColorProvider} from "./designsystem/foundation/color/GrowColorProvider";
import {GlobalStyle} from "./style/globalStyle";
// import Preview from "./designsystem/preview/Preview";
// import IconPreview from "./designsystem/preview/IconPreview";
import Router from "./routes";
import {BrowserRouter} from "react-router-dom";

const App = () => {

    return (
        <GrowColorProvider>
            <GlobalStyle/>
            {/*<Preview/>*/}
            {/*<IconPreview/>*/}
            <BrowserRouter>
                <Router/>
            </BrowserRouter>
        </GrowColorProvider>
    );
};

export default App;