import React from "react";
import {GrowButtonStyle} from "./GrowButton.style";
import {RuleSet} from "styled-components";
import {ButtonStyles, ButtonType} from "./ButtonType";
import {IconStyles, IconType} from "../../foundation/iconography/IconType";
import {Row} from "../../StyledFlex";

interface GrowButtonProps {
    text: string;
    type: ButtonType;
    leadingIcon?: IconType,
    leadingIconColor?: string,
    trailingIcon?: IconType,
    trailingIconColor?: string,
    isEnabled?: boolean,
    isLoading?: boolean,
    customStyle?: RuleSet;
}

export const GrowButton = (
    {
        text,
        type,
        leadingIcon,
        leadingIconColor,
        trailingIcon,
        trailingIconColor,
        isEnabled = true,
        isLoading = false,
        customStyle,
        ...props
    }: GrowButtonProps
) => {
    return <GrowButtonStyle
        style={ButtonStyles[type]}
        customStyle={customStyle}
        {...props}>
        <Row columnGap={ButtonStyles[type].horizontalPadding}>
            {leadingIcon && IconStyles[leadingIcon]}
            {text}
        </Row>
    </GrowButtonStyle>
};