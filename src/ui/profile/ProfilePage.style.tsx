import styled from "styled-components";
import {Guideline} from "../util/Guideline";
import {FlexLayout} from "../../designsystem/util/FlexLayout";
import {GrowTypographies, TypographyType} from "../../designsystem/foundation/text/GrowTypographies";

const style = {
    Container: styled.div`
        ${FlexLayout({columnGap: '8px'})};
        width: 100%;

        padding: 32px;
        margin-left: 160px;

        @media screen and (max-width: ${Guideline.Tablet}px) {
            margin-left: 76px;
        }

        @media screen and (max-width: ${Guideline.Mobile}px) {
            margin-left: 0;
            flex-direction: column;
        }
    `,
    FirstContainer: styled.div`
        ${FlexLayout({flexDirection: 'column', rowGap: '28px', alignItems: 'flex-start'})};
        width: 50%;
        margin: 12px 16px;
        
        @media screen and (max-width: ${Guideline.Mobile}px) {
            width: 100%;
        }
    `,
    Developer: styled.div`
        color: ${({theme}) => theme.textAlt};
        ${GrowTypographies[TypographyType.LabelR]};
    `,
    ProfileName: styled.div`
        color: ${({theme}) => theme.textNormal};
        ${GrowTypographies[TypographyType.BodyB]};
    `,
    Subtitle: styled.div`
        color: ${({theme}) => theme.textNormal};
        ${GrowTypographies[TypographyType.Headline1B]};
    `,
    Content: styled.p`
        color: ${({theme}) => theme.textAlt};
        ${GrowTypographies[TypographyType.BodyM]};
    `,
    LanguageContainer: styled.div`
        ${FlexLayout({rowGap: '8px', columnGap: '8px'})};
        flex-wrap: wrap;
    `,
    SecondContainer: styled.div`
        ${FlexLayout({rowGap: '12px', alignItems: 'flex-start'})};
        width: 50%;

        @media screen and (max-width: ${Guideline.Mobile}px) {
            width: 100%;
        }
    `
};

export default style;