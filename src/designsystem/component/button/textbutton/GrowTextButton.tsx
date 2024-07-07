import React from "react";
import {css, RuleSet, useTheme} from "styled-components";

import {ButtonStyles, ButtonType} from "@designsystem/component/button/type/ButtonType";
import {Row} from "@designsystem/util/StyledFlex";
import GrowLoader from "@designsystem/component/loader/GrowLoader";
import GrowIcon, {IconType} from "@designsystem/foundation/iconography/GrowIcon";
import * as S from "@designsystem/component/button/textbutton/GrowTextButton.style";

interface GrowTextButtonProps {
    text: string;
    type: ButtonType;
    onClick: () => void,
    leadingIcon?: IconType,
    trailingIcon?: IconType,
    isEnabled?: boolean,
    isLoading?: boolean,
    $customStyle?: RuleSet;
}

const GrowTextButton = (
    {
        text,
        type,
        onClick,
        leadingIcon,
        trailingIcon,
        isEnabled = true,
        isLoading = false,
        $customStyle,
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
            $customStyle={$customStyle}
            $isLoading={isLoading}
            disabled={!isEnabled}
            {...props}>
            <Row
                $columnGap={ButtonStyles[type].labelSpacing}
                $alignItems={'center'}
                $customStyle={css`
                    opacity: ${isLoading ? 0 : 1};
                `}>
                {leadingIcon && <GrowIcon type={leadingIcon} size={20} tint={color}/>}
                {text}
                {trailingIcon && <GrowIcon type={trailingIcon} size={20} tint={color}/>}
            </Row>
            {isLoading && <GrowLoader customStyle={css`position: absolute !important;`} color={color}/>}
        </S.GrowTextButtonStyle>
    );
};

export default GrowTextButton;