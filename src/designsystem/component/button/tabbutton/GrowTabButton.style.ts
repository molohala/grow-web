import styled, {css, RuleSet} from "styled-components";
import {FlexLayout} from "../../../util/FlexLayout";
import {bounceAnimation} from "../../../animation/bounceAnimation";
import {GrowTypographies, TypographyType} from "../../../foundation/text/GrowTypographies";
import {ButtonStyle} from "../type/ButtonType";

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
    ${GrowTypographies[TypographyType.BodyB]};
    ${({customStyle}) => customStyle};
    outline: none;
    border: none;
    
    // Interaction
    ${({disabled, isLoading}) => css`
        ${!disabled && !isLoading && bounceAnimation};
        cursor: ${!disabled && !isLoading && 'pointer'};
    `};
`;
