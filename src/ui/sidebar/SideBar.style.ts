import styled from "styled-components";
import {FlexLayout} from "../../designsystem/util/FlexLayout";
import {GrowTypographies, TypographyType} from "../../designsystem/foundation/text/GrowTypographies";
import {bounceAnimation} from "../../designsystem/animation/bounceAnimation";
import {Guideline} from "../util/Guideline";
import BlackEffect from "../../designsystem/foundation/effect/BlackEffect";

export const Container = styled.nav`
    ${FlexLayout({flexDirection: 'column', justifyContent: 'spacer-between'})};
    align-self: stretch;
    background-color: ${({theme}) => theme.background};
    padding: 16px 8px;

    @media screen and (max-width: ${Guideline.Mobile}px) {
        ${FlexLayout({flexDirection: 'row'})};
        padding: 4px 8px;
        height: auto;
        width: 100vw;
        bottom: 0;
    }
    height: 100vh;
    position: fixed;
    z-index: 1;
`;

export const ItemsContainer = styled.div`
    ${FlexLayout({flexDirection: 'column', rowGap: '4px', justifyContent: 'space-evenly'})};
    flex: 1;
    @media screen and (max-width: ${Guideline.Mobile}px) {
        ${FlexLayout({flexDirection: 'row'})};
    }
`;

export const ItemContainer = styled.button`
    // Layout
    padding: 12px 32px 12px 16px;
    ${FlexLayout({columnGap: '16px', alignItems: 'center'})};

    // Style
    background-color: transparent;
    border: none;

    // Interaction
    ${bounceAnimation};
    &:hover {
        ${BlackEffect({alpha: 0.05})};
    }
    
    cursor: pointer;
    border-radius: 8px;
    transition: 0.2s background-color;
    
    @media screen and (max-width: ${Guideline.Tablet}px){
        padding: 12px 16px;
    }
`;

export const ItemLabel = styled.div<{
    selected: boolean
}>`
    ${GrowTypographies[TypographyType.BodyM]};
    color: ${({theme, selected}) => selected ? theme.bottomTabPrimary : theme.textDisabled};
    
    @media screen and (max-width: ${Guideline.Tablet}px) {
        display: none;
    }
`