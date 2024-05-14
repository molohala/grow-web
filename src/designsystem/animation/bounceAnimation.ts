import {css} from "styled-components";

export const bounceAnimation = css`
    &:active {
        opacity: 0.64;
        scale: 0.97;
        transition: 0.3s;
        transition-timing-function: cubic-bezier(0.11, 0.9, 0.265, 0.945);
    }
`;