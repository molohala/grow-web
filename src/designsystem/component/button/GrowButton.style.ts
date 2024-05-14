import styled, {css, RuleSet} from "styled-components";
import {FlexLayout} from "../../FlexLayout";
import {bounceAnimation} from "../../animation/bounceAnimation";
import {GrowTypographies} from "../../foundation/text/GrowTypographies";
import {ButtonStyle} from "./ButtonType";

export const GrowButtonStyle = styled.button<{
    style: ButtonStyle,
    customStyle?: RuleSet;
}>`
    outline: none;
    cursor: pointer;
    height: ${({style}) => style?.height}px;
    border: none;
    ${({theme}) => css`
        background-color: ${theme.buttonPrimary};
    `};
    padding: ${({style}) => `0 ${style.horizontalPadding}`}px;
    ${({customStyle}) => customStyle};
    ${FlexLayout({justifyContent: 'center', alignItems: 'center'})};
    ${({style}) => GrowTypographies[style.font]};
    ${bounceAnimation};
    border-radius: ${({style}) => style.cornerRadius}px;
`;
