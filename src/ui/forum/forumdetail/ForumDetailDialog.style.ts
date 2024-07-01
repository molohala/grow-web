import styled from "styled-components";
import {FlexLayout} from "../../../designsystem/util/FlexLayout";
import {GrowTypographies, TypographyType} from "../../../designsystem/foundation/text/GrowTypographies";

const style = {
    DialogContainer: styled.dialog`
        // style
        ${FlexLayout({flexDirection: 'column', alignItems: 'center'})};
        max-width: 100vw;
        width: 100vw;
        max-height: 100vh;
        height: 100vh;

        // style
        border: none;
        outline: none;
        background: none;
    `,
    Container: styled.div`
        // layout
        ${FlexLayout({flexDirection: 'column', rowGap: '8px'})};
        background: ${({theme}) => theme.backgroundAlt};
        margin: 32px 0;
        z-index: 2;
        width: 440px;

        // style
        padding: 16px;
        border-radius: 16px;
        color: white;
    `,
    Content: styled.div`
        ${FlexLayout({flexDirection: 'column', rowGap: '12px'})};
        padding: 12px;
    `,
    InfoContainer: styled.div`
        ${FlexLayout({alignItems: 'center', columnGap: '8px'})};
    `,
    UserInfoContainer: styled.div`
        ${FlexLayout({flexDirection: 'column'})};
    `,
    WriterName: styled.div`
        ${GrowTypographies[TypographyType.BodyB]};
        color: ${({theme}) => theme.textNormal};
    `,
    CreatedAt: styled.div`
        ${GrowTypographies[TypographyType.LabelM]};
        color: ${({theme}) => theme.textAlt};
    `,
    ForumContent: styled.p`
        ${GrowTypographies[TypographyType.BodyR]};
        color: ${({theme}) => theme.textNormal};
    `,
    Comments: styled.li`
        list-style: none;
    `,
    Backdrop: styled.div`
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        position: fixed;
        background: black;
        opacity: 0.5;
        z-index: 1;
    `
};
export default style;
