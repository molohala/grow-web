import {css, RuleSet} from "styled-components";

export enum Font {
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

export const Fonts: { [key in Font]: RuleSet } = Object.freeze({
    [Font.Title1B]: css`
        font-weight: 700;
        font-size: 28px;
        line-height: 130%;
    `,
    [Font.Title1M]: css`
        font-weight: 500;
        font-size: 28px;
        line-height: 130%;
    `,
    [Font.Title1R]: css`
        font-weight: 400;
        font-size: 28px;
        line-height: 130%;
    `,
    [Font.Title2B]: css`
        font-weight: 700;
        font-size: 24px;
        line-height: 130%;
    `,
    [Font.Title2M]: css`
        font-weight: 500;
        font-size: 24px;
        line-height: 130%;
    `,
    [Font.Title2R]: css`
        font-weight: 400;
        font-size: 24px;
        line-height: 130%;
    `,

    [Font.Headline1B]: css`
        font-weight: 700;
        font-size: 20px;
        line-height: 130%;
    `,
    [Font.Headline1M]: css`
        font-weight: 500;
        font-size: 20px;
        line-height: 130%;
    `,
    [Font.Headline1R]: css`
        font-weight: 400;
        font-size: 20px;
        line-height: 130%;
    `,
    [Font.Headline2B]: css`
        font-weight: 700;
        font-size: 18px;
        line-height: 130%;
    `,
    [Font.Headline2M]: css`
        font-weight: 500;
        font-size: 18px;
        line-height: 130%;
    `,
    [Font.Headline2R]: css`
        font-weight: 400;
        font-size: 18px;
        line-height: 130%;
    `,
    [Font.BodyB]: css`
        font-weight: 700;
        font-size: 16px;
        line-height: 130%;
    `,
    [Font.BodyM]: css`
        font-weight: 500;
        font-size: 16px;
        line-height: 130%;
    `,
    [Font.BodyR]: css`
        font-weight: 400;
        font-size: 16px;
        line-height: 130%;
    `,
    [Font.CaptionB]: css`
        font-weight: 700;
        font-size: 14px;
        line-height: 130%;
    `,
    [Font.CaptionM]: css`
        font-weight: 500;
        font-size: 14px;
        line-height: 130%;
    `,
    [Font.CaptionR]: css`
        font-weight: 400;
        font-size: 14px;
        line-height: 130%;
    `,
    [Font.LabelB]: css`
        font-weight: 700;
        font-size: 12px;
        line-height: 130%;
    `,
    [Font.LabelM]: css`
        font-weight: 500;
        font-size: 12px;
        line-height: 130%;
    `,
    [Font.LabelR]: css`
        font-weight: 400;
        font-size: 12px;
        line-height: 130%;
    `
});