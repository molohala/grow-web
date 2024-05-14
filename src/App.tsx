import {GrowButton} from "./designsystem/component/button/GrowButton";
import {ButtonType} from "./designsystem/component/button/ButtonType";
import {GrowColorProvider} from "./designsystem/foundation/color/GrowColorProvider";
import {GrowLightScheme} from "./designsystem/foundation/color/GrowColorSementic";
import {GlobalStyle} from "./util/globalStyle";
import {Column} from "./designsystem/StyledFlex";
import {css} from "styled-components";
import {IconType} from "./designsystem/foundation/iconography/IconType";

const App = () => {
    return (
        <GrowColorProvider theme={GrowLightScheme}>
            <GlobalStyle/>
            <Column rowGap={8} padding={'8px'}>
                <GrowButton text={'시작하기'} leadingIcon={IconType.Send} type={ButtonType.CTA} customStyle={css`width: 200px;`}/>
                <GrowButton text={'시작하기'} type={ButtonType.Large}/>
                <GrowButton text={'시작하기'} type={ButtonType.Medium}/>
                <GrowButton text={'시작하기'} type={ButtonType.Small}/>
            </Column>
        </GrowColorProvider>
    );
};

export default App;