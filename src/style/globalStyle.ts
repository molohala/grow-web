import {createGlobalStyle} from "styled-components";
import './font.css';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Wanted Sans Variable", "Wanted Sans", sans-serif !important;
    }
`;