import styled, {css, RuleSet} from "styled-components";
import {FlexLayout} from "../../../util/FlexLayout";
import {bounceAnimation} from "../../../animation/bounceAnimation";
import {GrowTypographies, TypographyType} from "../../../foundation/text/GrowTypographies";

export const GrowRadioButtonStyle = styled.button<{
    $isSelected: boolean,
    customStyle?: RuleSet;
}>`
    // Layout
    position: relative;
    ${FlexLayout({justifyContent: 'center', alignItems: 'center'})};
    padding: 8px 14px;
    flex-shrink: 0;
    
    // Style
    ${({theme, $isSelected}) => css`
        color: ${$isSelected ? theme.radioButtonSecondary : theme.radioButtonSecondaryDisabled};
        border: 1.5px solid ${$isSelected ? theme.radioButtonPrimary : theme.radioButtonPrimaryDisabled};
    `};
    background-color: transparent;
    border-radius: 12px;
    ${GrowTypographies[TypographyType.BodyM]};
    ${({customStyle}) => customStyle};
    outline: none;
    
    // Interaction
    ${bounceAnimation};
    cursor: pointer;
`;
