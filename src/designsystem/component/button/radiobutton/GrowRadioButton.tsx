import React from "react";
import * as S from "./GrowRadioButton.style";
import {RuleSet, useTheme} from "styled-components";
import {Row} from "../../../util/StyledFlex";
import GrowIcon, {IconType} from "../../../foundation/iconography/GrowIcon";

interface GrowLikeButtonProps {
    text: string;
    onClick: () => void,
    isSelected: boolean,
    selectedIcon?: IconType,
    unselectedIcon?: IconType,
    customStyle?: RuleSet;
}

const GrowRadioButton = (
    {
        text,
        onClick,
        isSelected,
        selectedIcon,
        unselectedIcon,
        customStyle,
        ...props
    }: GrowLikeButtonProps
) => {

    const theme = useTheme();
    const primary = isSelected ? theme.radioButtonPrimary : theme.radioButtonPrimaryDisabled;
    const selected = selectedIcon ?? IconType.Radio;
    const unselected = unselectedIcon ?? IconType.RadioUnselected;
    const icon = isSelected ? selected : unselected;

    return (
        <S.GrowRadioButtonStyle
            onClick={onClick}
            isSelected={isSelected}
            customStyle={customStyle}
            {...props}>
            <Row
                columnGap={6}
                alignItems={'center'}>
                <GrowIcon type={icon} tint={primary} size={20}/>
                {text}
            </Row>
        </S.GrowRadioButtonStyle>
    );
};

export default GrowRadioButton;