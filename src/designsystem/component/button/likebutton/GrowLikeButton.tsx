import React from "react";
import * as S from "./GrowLikeButton.style";
import {css, RuleSet, useTheme} from "styled-components";
import {Column, Row} from "../../../util/StyledFlex";
import GrowIcon, {IconType} from "../../../foundation/iconography/GrowIcon";
import GrowLoader from "../../loader/GrowLoader";
import GrowDivider, {DividerType} from "../../divider/GrowDivider";

interface GrowLikeButtonProps {
    like: number;
    onClick: () => void,
    isLiked: boolean,
    customStyle?: RuleSet;
}

const GrowLikeButton = (
    {
        like,
        onClick,
        isLiked,
        customStyle,
        ...props
    }: GrowLikeButtonProps
) => {

    const theme = useTheme();
    const color = isLiked ? theme.likePrimary : theme.likePrimaryDisabled;

    return (
        <S.GrowLikeButtonStyle
            onClick={onClick}
            isLiked={isLiked}
            customStyle={customStyle}
            {...props}>
            <Row
                columnGap={3}
                alignItems={'center'}>
                <GrowIcon type={IconType.HeartFill} tint={color} size={20}/>
                {like}
            </Row>
        </S.GrowLikeButtonStyle>
    );
};

export default GrowLikeButton;