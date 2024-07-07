import {Font} from "@designsystem/foundation/text/Fonts";

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
    font: Font;
}

export const ButtonStyles: { [key in ButtonType]: ButtonStyle } = {
    [ButtonType.CTA]: {
        horizontalPadding: 0,
        labelSpacing: 6,
        height: 56,
        cornerRadius: 12,
        font: Font.BodyB
    },
    [ButtonType.Large]: {
        horizontalPadding: 20,
        labelSpacing: 5,
        height: 45,
        cornerRadius: 10,
        font: Font.BodyB
    },
    [ButtonType.Medium]: {
        horizontalPadding: 12,
        labelSpacing: 4,
        height: 41,
        cornerRadius: 8,
        font: Font.BodyB
    },
    [ButtonType.Small]: {
        horizontalPadding: 10,
        labelSpacing: 3,
        height: 37,
        cornerRadius: 6,
        font: Font.BodyR
    }
};