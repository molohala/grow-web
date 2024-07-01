import * as S from './Spacer.style';
import {RuleSet} from "styled-components";

interface SpacerProps {
    $customStyle?: RuleSet
}

const Spacer = (
    {
        $customStyle
    }: SpacerProps
) => {
    return (
        <S.Container $customStyle={$customStyle}/>
    );
};

export default Spacer;