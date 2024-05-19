import styled from "styled-components";
import {FlexLayout} from "../../designsystem/util/FlexLayout";

export const Container = styled.div`
    ${FlexLayout({})};
    height: 100vh;
    width: 100%;
    background-color: ${({theme}) => theme.backgroundAlt};
`