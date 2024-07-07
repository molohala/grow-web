import styled from "styled-components";
import FlexLayout from "@designsystem/util/FlexLayout";
import {Fonts, Font} from "@designsystem/foundation/text/Fonts";
import {bounceAnimation} from "@designsystem/animation/bounceAnimation";

export const Container = styled.div`
    ${FlexLayout({justifyContent: 'center'})};
    flex: 1;
`

export const Content = styled.div`
    margin: 32px 12px;
    ${FlexLayout({flexDirection: 'column', rowGap: '16px', alignItems: 'center'})};
    max-width: 640px;
    width: 100%;
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
    ${Fonts[Font.BodyB]};
    border: none;
    cursor: pointer;
    ${bounceAnimation};
`;

export const ForumContent = styled.div`
    ${FlexLayout({flexDirection: 'column', rowGap: '8px'})};
    flex: 1;
`;