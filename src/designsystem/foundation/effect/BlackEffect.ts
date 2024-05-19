import {css} from "styled-components";

interface BlackEffectProps {
    alpha: number;
}

const BlackEffect = (
    {
        alpha
    }: BlackEffectProps
) => css`
    background-color: rgba(0, 0, 0, ${alpha});
`;

export default BlackEffect;