import styled from "styled-components";

import FlexLayout from "@designsystem/util/FlexLayout";
import {Fonts, Font} from "@designsystem/foundation/text/Fonts";

import DialogContentStyle from '@ui/util/DialogContentStyle';

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
};

export default style;