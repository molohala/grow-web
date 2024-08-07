import React from "react";
import {RuleSet, useTheme} from "styled-components";

import * as S from "@designsystem/component/button/likebutton/GrowLikeButton.style";
import {Row} from "@designsystem/util/StyledFlex";
import GrowIcon, {IconType} from "@designsystem/foundation/iconography/GrowIcon";

interface GrowLikeButtonProps {
    like: number;
    onClick: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void,
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
            $isLiked={isLiked}
            customStyle={customStyle}
            {...props}>
            <Row
                $columnGap={3}
                $alignItems={'center'}>
                <GrowIcon type={IconType.HeartFill} tint={color} size={20}/>
                {like}
            </Row>
        </S.GrowLikeButtonStyle>
    );
};

export default GrowLikeButton;