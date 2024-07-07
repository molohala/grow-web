import * as S from "@designsystem/component/divider/GrowDividerContainer";

export enum DividerType {
    Thin,
    Thick
}

export enum Direction {
    Horizontal,
    Vertical
}

interface GrowDividerProps {
    direction?: Direction;
    type?: DividerType;
    color?: string;
}

const GrowDivider = (
    {
        direction,
        type = DividerType.Thin,
        color
    }: GrowDividerProps
) => {
    return (
        <S.GrowDividerContainer direction={direction} type={type} color={color}/>
    );
};

export default GrowDivider;