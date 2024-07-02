import styled from "styled-components";
import {FlexLayout} from "../../designsystem/util/FlexLayout";
import {Guideline} from "../util/Guideline";
import {GrowTypographies, TypographyType} from "../../designsystem/foundation/text/GrowTypographies";

const style = {
    Container: styled.div`
        ${FlexLayout({flexDirection: 'column', rowGap: '8px'})};
        background: ${({theme}) => theme.backgroundAlt};
        margin: 32px;

        z-index: 3;
        max-width: 440px;
        width: 100%;
        padding: 16px;

        // style
        border-radius: 16px;

        @media screen and (max-width: ${Guideline.Mobile}px) {
            padding: 8px;
        }
    `,
    Title: styled.h1`
        ${GrowTypographies[TypographyType.Headline2M]};
        color: ${({theme}) => theme.textNormal};
    `,
    TopBar: styled.div`
        ${FlexLayout({alignItems: 'center'})};

    `,
    WarningText: styled.p`
        ${GrowTypographies[TypographyType.LabelR]};
        color: ${({theme}) => theme.textWarning};
    `
};

export default style;