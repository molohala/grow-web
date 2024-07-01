import styled from "styled-components";
import {FlexLayout} from "../../designsystem/util/FlexLayout";
import {GrowTypographies, TypographyType} from "../../designsystem/foundation/text/GrowTypographies";
import BlackEffect from "../../designsystem/foundation/effect/BlackEffect";
import {bounceAnimation} from "../../designsystem/animation/bounceAnimation";

export const Container = styled.div`
    ${FlexLayout({justifyContent: 'center'})};
    flex: 1;
`

export const Content = styled.div`
    margin: 32px;
    ${FlexLayout({flexDirection: 'column', rowGap: '16px', alignItems: 'center'})};
    max-width: 640px;
    flex: 1;
`;

export const WriteContainer = styled.button`
    // Layout
    ${FlexLayout({alignItems: 'center', columnGap: '8px'})};
    align-self: stretch;

    // Style
    padding: 12px 20px;
    border-radius: 50px;
    background: ${({theme}) => theme.background};
    color: ${({theme}) => theme.textNormal};
    ${GrowTypographies[TypographyType.BodyB]};
    border: none;
    cursor: pointer;
    ${bounceAnimation};
`;

export const ForumContent = styled.div`
    ${FlexLayout({flexDirection: 'column', rowGap: '8px'})};
`