import {css, RuleSet} from "styled-components";
import {FontWeight} from "./FontWeight";

export enum TypographyType {
    Title1B,
    Title1M,
    Title1R,
    Title2B,
    Title2M,
    Title2R,
    Headline1B,
    Headline1M,
    Headline1R,
    Headline2B,
    Headline2M,
    Headline2R,
    BodyB,
    BodyM,
    BodyR,
    LabelB,
    LabelM,
    LabelR,
    CaptionB,
    CaptionM,
    CaptionR
}

export const GrowTypographies: { [key in TypographyType]: RuleSet } = Object.freeze({
    [TypographyType.Title1B]: css`
        font-weight: 700;
        font-size: 28px;
        line-height: 130%;
    `,
    [TypographyType.Title1M]: css`
        font-weight: 500;
        font-size: 28px;
        line-height: 130%;
    `,
    [TypographyType.Title1R]: css`
        font-weight: 400;
        font-size: 28px;
        line-height: 130%;
    `,
    [TypographyType.Title2B]: css`
        font-weight: 700;
        font-size: 24px;
        line-height: 130%;
    `,
    [TypographyType.Title2M]: css`
        font-weight: 500;
        font-size: 24px;
        line-height: 130%;
    `,
    [TypographyType.Title2R]: css`
        font-weight: 400;
        font-size: 24px;
        line-height: 130%;
    `,

    [TypographyType.Headline1B]: css`
        font-weight: 700;
        font-size: 20px;
        line-height: 130%;
    `,
    [TypographyType.Headline1M]: css`
        font-weight: 500;
        font-size: 20px;
        line-height: 130%;
    `,
    [TypographyType.Headline1R]: css`
        font-weight: 400;
        font-size: 20px;
        line-height: 130%;
    `,
    [TypographyType.Headline2B]: css`
        font-weight: 700;
        font-size: 18px;
        line-height: 130%;
    `,
    [TypographyType.Headline2M]: css`
        font-weight: 500;
        font-size: 18px;
        line-height: 130%;
    `,
    [TypographyType.Headline2R]: css`
        font-weight: 400;
        font-size: 18px;
        line-height: 130%;
    `,
    [TypographyType.BodyB]: css`
        font-weight: 700;
        font-size: 16px;
        line-height: 130%;
    `,
    [TypographyType.BodyM]: css`
        font-weight: 500;
        font-size: 16px;
        line-height: 130%;
    `,
    [TypographyType.BodyR]: css`
        font-weight: 400;
        font-size: 16px;
        line-height: 130%;
    `,
    [TypographyType.CaptionB]: css`
        font-weight: 700;
        font-size: 14px;
        line-height: 130%;
    `,
    [TypographyType.CaptionM]: css`
        font-weight: 500;
        font-size: 14px;
        line-height: 130%;
    `,
    [TypographyType.CaptionR]: css`
        font-weight: 400;
        font-size: 14px;
        line-height: 130%;
    `,
    [TypographyType.LabelB]: css`
        font-weight: 700;
        font-size: 12px;
        line-height: 130%;
    `,
    [TypographyType.LabelM]: css`
        font-weight: 500;
        font-size: 12px;
        line-height: 130%;
    `,
    [TypographyType.LabelR]: css`
        font-weight: 400;
        font-size: 12px;
        line-height: 130%;
    `
});