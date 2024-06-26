import styled, {RuleSet} from "styled-components";
import {FlexLayout} from "../../util/FlexLayout";
import {bounceAnimation} from "../../animation/bounceAnimation";
import {GrowTypographies, TypographyType} from "../../foundation/text/GrowTypographies";

export const GrowTextFieldStyle = styled.div<{
    strokeColor: string,
    customStyle?: RuleSet
}>`
    // Layout
    height: 48px;
    ${FlexLayout({justifyContent: "spacer-between", alignItems: "center"})};
    padding-left: 12px;
    padding-right: 8px;
    
    // Style
    border-radius: 12px;
    border: 1px solid ${({strokeColor}) => strokeColor};
    transition: 0.1s border;
    ${({customStyle}) => customStyle};
`

export const Input = styled.input<{
    textColor: string,
    placeholderColor: string,
}>`
    // Layout
    flex: 1;
    align-self: stretch;

    // Style
    outline: none;
    border: none;
    background-color: transparent;
    color: ${({textColor}) => textColor};
    ${GrowTypographies[TypographyType.BodyM]};

    &::placeholder {
        color: ${({placeholderColor}) => placeholderColor};
    }
`;

export const TrailingIconButton = styled.button<{
    show: boolean,
    isEnabled: boolean
}>`
    // Layout
    width: 32px;
    height: 32px;
    
    // style
    outline: none;
    border: none;
    background-color: transparent;
    opacity: ${({show}) => (show ? 1 : 0)};
    transition: 0.25s opacity;
    opacity: ${({isEnabled}) => (isEnabled ? 1 : 0)};
    
    // Interaction
    ${bounceAnimation};
    cursor: pointer;
    user-select: none;
`