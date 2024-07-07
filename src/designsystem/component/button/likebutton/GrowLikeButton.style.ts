import styled, {css, RuleSet} from "styled-components";

import FlexLayout from "@designsystem/util/FlexLayout";
import {bounceAnimation} from "@designsystem/animation/bounceAnimation";
import {Fonts, Font} from "@designsystem/foundation/text/Fonts";

export const GrowLikeButtonStyle = styled.button<{
    $isLiked: boolean,
    customStyle?: RuleSet;
}>`
    // Layout
    position: relative;
    height: 29px;
    ${FlexLayout({justifyContent: 'center', alignItems: 'center'})};
    padding: 0 6px;
    
    // Style
    ${({theme, $isLiked}) => css`
        color: ${$isLiked ? theme.likePrimary : theme.likePrimaryDisabled};
        background-color: ${$isLiked ? theme.likeSecondary : theme.likeSecondaryDisabled};
    `};
    border-radius: 4px;
    ${Fonts[Font.BodyM]};
    ${({customStyle}) => customStyle};
    outline: none;
    border: none;
    
    // Interaction
    ${bounceAnimation};
    cursor: pointer;
`;
