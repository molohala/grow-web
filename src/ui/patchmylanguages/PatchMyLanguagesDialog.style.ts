import styled from "styled-components";

import DialogContentStyle from "@ui/util/DialogContentStyle";

import FlexLayout from "@designsystem/util/FlexLayout";
import {Fonts, Font} from "@designsystem/foundation/text/Fonts";

const style = {
    Container: styled.div`
        ${FlexLayout({flexDirection: 'column', rowGap: '8px'})};
        ${DialogContentStyle};
    `,
    Title: styled.h1`
        ${Fonts[Font.Headline2M]};
        color: ${({theme}) => theme.textNormal};
    `,
    TopBar: styled.div`
        ${FlexLayout({alignItems: 'center'})};
    `,
    LanguageContainer: styled.div`
        ${FlexLayout({rowGap: '8px', columnGap: '8px'})};
        flex-wrap: wrap;
    `,
}

export default style;