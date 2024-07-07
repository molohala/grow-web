import styled, {css} from "styled-components";
import {GrowShadow, ShadowType} from "@designsystem/foundation/shadow/GrowShadow";

export const ShadowRectangle = styled.div<{
    shadowType: ShadowType
}>`
    width: 100px;
    height: 100px;
    background-color: ${({theme}) => theme.background};
    ${({shadowType}) => css`
        ${GrowShadow(shadowType)};
    `};
`