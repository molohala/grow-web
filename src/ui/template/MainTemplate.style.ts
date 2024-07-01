import styled from "styled-components";
import {FlexLayout} from "../../designsystem/util/FlexLayout";
import {Guideline} from "../util/Guideline";

export const Container = styled.div`
    ${FlexLayout({})};
    height: 100vh;
    width: 100%;
    background-color: ${({theme}) => theme.backgroundAlt};
    overflow-x: hidden;
    
    @media screen and (max-width: ${Guideline.Mobile}px) {
        ${FlexLayout({flexDirection: 'column'})};
    }
`