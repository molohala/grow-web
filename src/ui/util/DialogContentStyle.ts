import {css} from "styled-components";
import {Guideline} from "@ui/util/Guideline";

const DialogContentStyle = css`
    background: ${({theme}) => theme.backgroundAlt};
    margin: 32px;
    z-index: 3;
    max-width: 440px;
    width: 100%;
    padding: 32px;

    // style
    border-radius: 16px;

    @media screen and (max-width: ${Guideline.Mobile}px) {
        padding: 12px 16px;
    }
`

export default DialogContentStyle;