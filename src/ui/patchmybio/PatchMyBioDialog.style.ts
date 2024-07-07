import styled from "styled-components";

import FlexLayout from "@designsystem/util/FlexLayout";
import {GrowTypographies, TypographyType} from "@designsystem/foundation/text/GrowTypographies";

import DialogContentStyle from '@ui/util/DialogContentStyle';

const style = {
    Container: styled.div`
        ${FlexLayout({flexDirection: 'column', rowGap: '8px'})};
        ${DialogContentStyle};
    `,
    Title: styled.h1`
        ${GrowTypographies[TypographyType.Headline2M]};
        color: ${({theme}) => theme.textNormal};
    `,
    TopBar: styled.div`
        ${FlexLayout({alignItems: 'center'})};
    `,
};

export default style;