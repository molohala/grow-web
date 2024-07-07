import styled, {css} from "styled-components";

import {Direction, DividerType} from "@designsystem/component/divider/GrowDivider";

export const GrowDividerContainer = styled.div<{
    direction?: Direction,
    type: DividerType,
    color?: string
}>`
    display: flex;
    flex-direction: ${({direction}) => (direction ?? Direction.Horizontal) === Direction.Horizontal ? 'column' : 'row'};
    background-color: ${({color, theme}) => color ?? theme.dividerNormal};
    align-self: stretch;
    flex-shrink: 0;
    flex-grow: 1;
    ${({type, direction}) =>
            (direction ?? Direction.Horizontal) === Direction.Horizontal
                    ? css`height: ${type === DividerType.Thin ? 1 : 8}px;`
                    : css`width: ${type === DividerType.Thin ? 1 : 8}px`
    }
}`;