import styled from "styled-components";
import {FlexLayout} from "../../../designsystem/util/FlexLayout";
import {GrowTypographies, TypographyType} from "../../../designsystem/foundation/text/GrowTypographies";
import {Guideline} from "../../util/Guideline";

const style = {
    DialogContainer: styled.dialog`
        // style
        ${FlexLayout({flexDirection: 'column', $alignItems: 'center'})};
        max-width: 100vw;
        width: 100vw;
        max-height: 100vh;
        height: 100vh;
        padding: 0 8px;

        // style
        border: none;
        outline: none;
        background: none;
    `,
    Container: styled.div`
        // layout
        ${FlexLayout({flexDirection: 'column', rowGap: '8px', $alignItems: 'center'})};
        background: ${({theme}) => theme.backgroundAlt};
        margin: 32px;
        z-index: 2;
        max-width: 440px;
        width: 100%;
        padding: 16px;

        // style
        border-radius: 16px;
        color: white;
        
        @media screen and (max-width: ${Guideline.Mobile}px) {
            padding: 8px;
        }
    `,
    Content: styled.div`
        ${FlexLayout({flexDirection: 'column', rowGap: '12px', $alignItems: 'flex-start'})};
        align-self: stretch;
        padding: 12px;
    `,
    InfoContainer: styled.div`
        ${FlexLayout({$alignItems: 'center', $columnGap: '8px'})};
        align-self: stretch;
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
        width: 100%;
        word-break: break-word;
    `,
    Comments: styled.li`
        ${FlexLayout({flexDirection: 'column', rowGap: '4px'})};
        list-style: none;
        align-self: stretch;
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
