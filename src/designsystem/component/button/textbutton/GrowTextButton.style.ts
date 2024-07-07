import styled, {css, RuleSet} from "styled-components";
import FlexLayout from "@designsystem/util/FlexLayout";
import {bounceAnimation} from "@designsystem/animation/bounceAnimation";
import {Fonts} from "@designsystem/foundation/text/Fonts";
import {ButtonStyle} from "@designsystem/component/button/type/ButtonType";

export const GrowTextButtonStyle = styled.button<{
    style: ButtonStyle,
    disabled: boolean,
    $isLoading: boolean,
    $customStyle?: RuleSet;
}>`
    // Layout
    position: relative;
    height: ${({style}) => style?.height}px;
    ${FlexLayout({justifyContent: 'center', alignItems: 'center'})};
    padding: ${({style}) => `0 ${style.horizontalPadding}`}px;
    
    // Style
    ${({theme, disabled}) => css`
        color: ${disabled ? theme.buttonPrimaryDisabled : theme.buttonPrimary};
    `};
    background-color: transparent;
    ${({style}) => Fonts[style.font]};
    ${({$customStyle}) => $customStyle};
    outline: none;
    border: none;
    
    // Interaction
    ${({disabled, $isLoading}) => css`
        ${!disabled && !$isLoading && bounceAnimation};
        cursor: ${!disabled && !$isLoading && 'pointer'};
    `};
`;
