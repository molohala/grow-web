import styled, {keyframes, RuleSet} from "styled-components";

export const LoaderContainer = styled.div<{
    size?: number
    customStyle?: RuleSet
}>`
    ${({customStyle}) => customStyle};
    height: ${({size}) => size || 24}px;
    width: ${({size}) => size || 24}px;
    position: relative;
`;

const RotateAnimationSpan = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(220deg);
    }
`;

export const RotateAnimationCircle = keyframes`
    0% {
        transform: rotate(-140deg);
    }
    50% {
        transform: rotate(-160deg);
    }
    100% {
        transform: rotate(140deg);
    }
`;

export const LoaderCircle = styled.span<{
    size?: number
}>`
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    height: ${({size}) => size || 24}px;
    width: ${({size}) => size || 24}px;
    clip: ${({size}) => `rect(0, ${size || 24}px, ${size || 24}px, ${size || 24 / 2.0}px)`};
    animation: ${RotateAnimationSpan} 1.2s linear infinite;
`;

export const LoaderCircleAfter = styled.div<{
    size?: number
    color?: string
}>`
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    height: ${({size}) => size || 24}px;
    width: ${({size}) => size || 24}px;
    clip: ${({size}) => `rect(0, ${size || 24}px, ${size || 24}px, ${size || 24 / 2.0}px)`};
    border: 3px solid ${({color}) => color || 'black'};
    border-radius: 50%;
    animation: ${RotateAnimationCircle} 1.2s cubic-bezier(0.770, 0.000, 0.175, 1.000) infinite;
`;
