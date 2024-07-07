import {RuleSet} from "styled-components";

import * as S from '@designsystem/component/spacer/Spacer.style';

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