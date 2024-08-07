import {css, RuleSet, useTheme} from "styled-components";
import React from "react";
import {Column, Row} from "@designsystem/util/StyledFlex";
import GrowIcon, {IconType} from "@designsystem/foundation/iconography/GrowIcon";
import GrowLoader from "@designsystem/component/loader/GrowLoader";
import GrowDivider, {DividerType} from "@designsystem/component/divider/GrowDivider";
import * as S from "@designsystem/component/button/tabbutton/GrowTabButton.style";

interface GrowTabButtonProps {
    text: string;
    onClick: () => void,
    leadingIcon?: IconType,
    trailingIcon?: IconType,
    isEnabled?: boolean,
    isLoading?: boolean,
    customStyle?: RuleSet;
}

const GrowTabButton = (
    {
        text,
        onClick,
        leadingIcon,
        trailingIcon,
        isEnabled = true,
        isLoading = false,
        customStyle,
        ...props
    }: GrowTabButtonProps
) => {

    const theme = useTheme();
    const color = isEnabled ? theme.tabButtonPrimary : theme.buttonTextDisabled;
    const dividerColor = isEnabled ? theme.tabButtonPrimary : 'transparent';

    return (
        <Column>
            <S.GrowTabButtonStyle
                onClick={() => {
                    if (isLoading || !isEnabled) return;
                    onClick();
                }}
                disabled={!isEnabled}
                isLoading={isLoading}
                customStyle={customStyle}
                {...props}>
                <Row
                    $columnGap={3}
                    $alignItems={'center'}
                    $customStyle={css`opacity: ${isLoading ? 0 : 1}`}>
                    {leadingIcon && <GrowIcon type={leadingIcon} size={20} tint={color}/>}
                    {text}
                    {trailingIcon && <GrowIcon type={trailingIcon} size={20} tint={color}/>}
                </Row>
                {isLoading && <GrowLoader customStyle={css`position: absolute !important;`} color={color}/>}
            </S.GrowTabButtonStyle>
            <GrowDivider type={DividerType.Thin} color={dividerColor} />
        </Column>
    );
};

export default GrowTabButton;