import styled from "styled-components";
import {FlexLayout} from "../../designsystem/util/FlexLayout";
import {GrowTypographies, TypographyType} from "../../designsystem/foundation/text/GrowTypographies";
import {bounceAnimation} from "../../designsystem/animation/bounceAnimation";
import BlackBackground from "../../designsystem/foundation/effect/BlackEffect";

export const Container = styled.div`
    ${FlexLayout({flexDirection: 'column', justifyContent: 'space-between'})};
    align-self: stretch;
    background-color: ${({theme}) => theme.background};
    padding: 16px 8px;
`;

export const ItemsContainer = styled.div`
    ${FlexLayout({flexDirection: 'column', rowGap: '4px'})};
`;

export const ItemContainer = styled.button<{
    selected: boolean
}>`
    // Layout
    padding: 12px 32px 12px 16px;
    ${FlexLayout({columnGap: '16px', alignItems: 'center'})};

    // Style
    ${GrowTypographies[TypographyType.BodyM]};
    color: ${({theme, selected}) => selected ? theme.bottomTabPrimary : theme.textDisabled};
    background-color: transparent;
    border: none;

    // Interaction
    ${bounceAnimation};
    &:hover {
        ${BlackBackground({alpha: 0.3})};
    }
    
    cursor: pointer;
    border-radius: 4px;
    transition: 0.2s background-color;
`;