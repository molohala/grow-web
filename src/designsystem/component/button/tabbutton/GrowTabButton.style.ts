import styled, {css, RuleSet} from "styled-components";

import FlexLayout from "@designsystem/util/FlexLayout";
import {bounceAnimation} from "@designsystem/animation/bounceAnimation";
import {Fonts, Font} from "@designsystem/foundation/text/Fonts";

export const GrowTabButtonStyle = styled.button<{
    disabled: boolean,
    isLoading: boolean,
    customStyle?: RuleSet;
}>`
    // Layout
    position: relative;
    height: 37px;
    ${FlexLayout({justifyContent: 'center', alignItems: 'center'})};
    padding: 0 12px;
    
    // Style
    ${({theme, disabled}) => css`
        color: ${disabled ? theme.buttonTextDisabled : theme.tabButtonPrimary};
    `};
    background-color: transparent;
    ${Fonts[Font.BodyB]};
    ${({customStyle}) => customStyle};
    outline: none;
    border: none;
    
    // Interaction
    ${({disabled, isLoading}) => css`
        ${!disabled && !isLoading && bounceAnimation};
        cursor: ${!disabled && !isLoading && 'pointer'};
    `};
    ${({customStyle}) => customStyle};
`;
