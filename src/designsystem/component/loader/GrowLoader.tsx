import * as S from "./GrowLoader.style";
import {RuleSet} from "styled-components";

export interface GrowLoaderProps {
    color?: string,
    size?: number,
    customStyle?: RuleSet,
}

const GrowLoader = (
    {
        color,
        size,
        customStyle,
        ...props
    }: GrowLoaderProps
) => {
    return (
        <S.LoaderContainer customStyle={customStyle} {...props} size={size}>
            <S.LoaderCircle size={size}>
                <S.LoaderCircleAfter size={size} color={color}/>
            </S.LoaderCircle>
        </S.LoaderContainer>
    );
}

export default GrowLoader;
