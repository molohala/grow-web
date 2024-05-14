import {TypographyType} from "../../foundation/text/GrowTypographies";

export enum ButtonType {
    CTA,
    Large,
    Medium,
    Small
}

export interface ButtonStyle {
    horizontalPadding: number;
    labelSpacing: number;
    height: number;
    cornerRadius: number;
    font: TypographyType;
}

export const ButtonStyles: { [key in ButtonType]: ButtonStyle } = {
    [ButtonType.CTA]: {
        horizontalPadding: 0,
        labelSpacing: 6,
        height: 56,
        cornerRadius: 12,
        font: TypographyType.BodyB
    },
    [ButtonType.Large]: {
        horizontalPadding: 20,
        labelSpacing: 5,
        height: 45,
        cornerRadius: 10,
        font: TypographyType.BodyB
    },
    [ButtonType.Medium]: {
        horizontalPadding: 12,
        labelSpacing: 4,
        height: 41,
        cornerRadius: 8,
        font: TypographyType.BodyB
    },
    [ButtonType.Small]: {
        horizontalPadding: 10,
        labelSpacing: 3,
        height: 37,
        cornerRadius: 6,
        font: TypographyType.BodyR
    }
};