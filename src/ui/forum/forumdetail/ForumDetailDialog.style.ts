import styled from "styled-components";
import {FlexLayout} from "../../../designsystem/util/FlexLayout";
import BlackEffect from "../../../designsystem/foundation/effect/BlackEffect";

export const DialogContainer = styled.dialog`
    // style
    ${FlexLayout({flexDirection: 'column', alignItems: 'center', justifyContent: 'center'})};
    max-width: 100vw;
    width: 100vw;
    max-height: 100vh;
    height: 100vh;
    
    // style
    border: none;
    outline: none;
    background: none;
}`;

export const Container = styled.div`
    // layout
    // ${FlexLayout({flexDirection: 'column', rowGap: '8px'})};
    background: ${({theme}) => theme.backgroundAlt};
    margin: 32px 0;
    z-index: 2;
    
    // style
    padding: 16px;
    border-radius: 16px;
    color: white;
`;

export const Backdrop = styled.div`
    top: 0; right: 0; bottom: 0; left: 0;
    position: fixed;
    background: black;
    opacity: 0.5;
    z-index: 1;
`