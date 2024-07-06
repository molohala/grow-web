import styled, {css, RuleSet} from "styled-components";
import {FlexLayout} from "../../../util/FlexLayout";
import {bounceAnimation} from "../../../animation/bounceAnimation";
import {GrowTypographies} from "../../../foundation/text/GrowTypographies";
import {ButtonStyle} from "../type/ButtonType";

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
    ${({style}) => GrowTypographies[style.font]};
    ${({$customStyle}) => $customStyle};
    outline: none;
    border: none;
    
    // Interaction
    ${({disabled, $isLoading}) => css`
        ${!disabled && !$isLoading && bounceAnimation};
        cursor: ${!disabled && !$isLoading && 'pointer'};
    `};
`;
