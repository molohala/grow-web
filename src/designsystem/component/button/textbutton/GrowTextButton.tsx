import React from "react";
import * as S from "./GrowTextButton.style";
import {css, RuleSet, useTheme} from "styled-components";
import {ButtonStyles, ButtonType} from "../type/ButtonType";
import {Row} from "../../../util/StyledFlex";
import GrowIcon, {IconType} from "../../../foundation/iconography/GrowIcon";
import GrowLoader from "../../loader/GrowLoader";

interface GrowTextButtonProps {
    text: string;
    type: ButtonType;
    onClick: () => void,
    leadingIcon?: IconType,
    leadingIconColor?: string,
    trailingIcon?: IconType,
    trailingIconColor?: string,
    isEnabled?: boolean,
    isLoading?: boolean,
    customStyle?: RuleSet;
}

const GrowTextButton = (
    {
        text,
        type,
        onClick,
        leadingIcon,
        leadingIconColor,
        trailingIcon,
        trailingIconColor,
        isEnabled = true,
        isLoading = false,
        customStyle,
        ...props
    }: GrowTextButtonProps
) => {

    const theme = useTheme();
    const style = ButtonStyles[type];
    const color = isEnabled ? theme.buttonPrimary : theme.buttonPrimaryDisabled;

    return (
        <S.GrowTextButtonStyle
            onClick={() => {
                if (isLoading || !isEnabled) return;
                onClick();
            }}
            style={style}
            customStyle={customStyle}
            isLoading={isLoading}
            disabled={!isEnabled}
            {...props}>
            <Row
                columnGap={ButtonStyles[type].labelSpacing}
                alignItems={'center'}
                customStyle={css`
                    opacity: ${isLoading ? 0 : 1};
                `}>
                {leadingIcon && <GrowIcon type={leadingIcon} width={'20px'} height={'20px'} tint={color}/>}
                {text}
                {trailingIcon && <GrowIcon type={trailingIcon} width={'20px'} height={'20px'} tint={color}/>}
            </Row>
            {isLoading && <GrowLoader customStyle={css`position: absolute !important;`} color={color}/>}
        </S.GrowTextButtonStyle>
    );
};

export default GrowTextButton;