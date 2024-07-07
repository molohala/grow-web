import {CSSProperties, css} from "styled-components";

interface FlexLayoutProps {
    flexDirection?: CSSProperties["flexDirection"];
    justifyContent?: CSSProperties["justifyContent"];
    alignItems?: CSSProperties["alignItems"];
    columnGap?: CSSProperties["columnGap"];
    rowGap?: CSSProperties["rowGap"];
    gap?: CSSProperties["gap"];
}

const FlexLayout = ({...props}: FlexLayoutProps) => css`
    display: flex;

    flex-direction: ${props.flexDirection};
    justify-content: ${props.justifyContent};
    align-items: ${props.alignItems};

    column-gap: ${props.columnGap};
    row-gap: ${props.rowGap};
    gap: ${props.gap};
`;


export default FlexLayout;