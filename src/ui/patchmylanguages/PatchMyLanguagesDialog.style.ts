import styled from "styled-components";
import {FlexLayout} from "../../designsystem/util/FlexLayout";
import DialogContentStyle from "../util/DialogContentStyle";
import {GrowTypographies, TypographyType} from "../../designsystem/foundation/text/GrowTypographies";

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
    LanguageContainer: styled.div`
        ${FlexLayout({rowGap: '8px', columnGap: '8px'})};
        flex-wrap: wrap;
    `,
}

export default style;