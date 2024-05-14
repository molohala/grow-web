import {ButtonType} from "./designsystem/component/button/ButtonType";
import {GrowColorProvider} from "./designsystem/foundation/color/GrowColorProvider";
import {GrowLightScheme} from "./designsystem/foundation/color/GrowColorSementic";
import {GlobalStyle} from "./util/globalStyle";
import {Column} from "./designsystem/util/StyledFlex";
import {css} from "styled-components";
import {IconType} from "./designsystem/foundation/iconography/GrowIcon";
import GrowButton from "./designsystem/component/button/GrowButton";
import GrowLoader from "./designsystem/component/loader/GrowLoader";

const App = () => {
    return (
        <GrowColorProvider theme={GrowLightScheme}>
            <GlobalStyle/>
            <Column rowGap={8} padding={'8px'}>
                <GrowButton onClick={() => {}} text={'시작하기'} leadingIcon={IconType.Send} type={ButtonType.CTA} customStyle={css`width: 200px;`}/>
                <GrowButton onClick={() => {}} text={'시작하기'} leadingIcon={IconType.Send} type={ButtonType.Large}/>
                <GrowButton onClick={() => {}} text={'시작하기'} leadingIcon={IconType.Send} type={ButtonType.Medium}/>
                <GrowButton onClick={() => {}} text={'시작하기'} leadingIcon={IconType.Send} type={ButtonType.Small}/>
                <GrowButton onClick={() => {}} text={'시작하기'} leadingIcon={IconType.Send} type={ButtonType.CTA} customStyle={css`width: 200px;`} isEnabled={false}/>
                <GrowButton onClick={() => {}} text={'시작하기'} leadingIcon={IconType.Send} type={ButtonType.Large} isEnabled={false}/>
                <GrowButton onClick={() => {}} text={'시작하기'} leadingIcon={IconType.Send} type={ButtonType.Medium} isEnabled={false}/>
                <GrowButton onClick={() => {}} text={'시작하기'} leadingIcon={IconType.Send} type={ButtonType.Small} isEnabled={false}/>
                <GrowButton onClick={() => {}} text={'시작하기'} isLoading={true} leadingIcon={IconType.Send} type={ButtonType.CTA} customStyle={css`width: 200px;`}/>
                <GrowButton onClick={() => {}} text={'시작하기'} isLoading={true} leadingIcon={IconType.Send} type={ButtonType.Large}/>
                <GrowButton onClick={() => {}} text={'시작하기'} isLoading={true} leadingIcon={IconType.Send} type={ButtonType.Medium}/>
                <GrowButton onClick={() => {}} text={'시작하기'} isLoading={true} leadingIcon={IconType.Send} type={ButtonType.Small}/>
                <GrowButton onClick={() => {}} text={'시작하기'} isLoading={true} leadingIcon={IconType.Send} type={ButtonType.CTA} customStyle={css`width: 200px;`} isEnabled={false}/>
                <GrowButton onClick={() => {}} text={'시작하기'} isLoading={true} leadingIcon={IconType.Send} type={ButtonType.Large} isEnabled={false}/>
                <GrowButton onClick={() => {}} text={'시작하기'} isLoading={true} leadingIcon={IconType.Send} type={ButtonType.Medium} isEnabled={false}/>
                <GrowButton onClick={() => {}} text={'시작하기'} isLoading={true} leadingIcon={IconType.Send} type={ButtonType.Small} isEnabled={false}/>

                <GrowLoader/>
            </Column>
        </GrowColorProvider>
    );
};

export default App;