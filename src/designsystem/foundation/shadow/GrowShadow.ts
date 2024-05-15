import {css} from "styled-components";

export enum ShadowType {
    EvBlack1,
    EvBlack2,
    EvBlack3
}

interface ShadowStyle {
    y: number,
    blur: number,
}

export const ShadowStyles: { [key in ShadowType]: ShadowStyle } = {
    [ShadowType.EvBlack1]: {
        y: 3,
        blur: 10
    },
    [ShadowType.EvBlack2]: {
        y: 4,
        blur: 12
    },
    [ShadowType.EvBlack3]: {
        y: 6,
        blur: 18
    }
};

export const GrowShadow = (type: ShadowType) => css`
    box-shadow: ${({theme}) => `0px ${ShadowStyles[type].y}px ${ShadowStyles[type].blur}px 0px ${theme.elevationBlack1}`};
`