import styled from "styled-components";
import {FlexLayout} from "../../designsystem/util/FlexLayout";
import {GrowTypographies, TypographyType} from "../../designsystem/foundation/text/GrowTypographies";

export const Container = styled.div`
    // Layout
    ${FlexLayout({justifyContent: 'center', alignItems: 'center'})};
    height: 100vh;
    width: 100%;
    
    // Style
    background-color: ${({theme}) => theme.backgroundAlt};
`;

export const FormContent = styled.div`
    // Layout
    ${FlexLayout({flexDirection: 'column', alignItems: 'center', rowGap: '32px'})};
    max-width: 360px;
    padding: 32px 16px;
    margin: 32px;
    flex: 1;
    
    // Style
    background: ${({theme}) => theme.background};
    border-radius: 16px;
`;

export const LoginTitle = styled.h1`
    ${GrowTypographies[TypographyType.Headline1B]};
    color: ${({theme}) => theme.textNormal};
    user-select: none;
`;

export const Form = styled.div`
    ${FlexLayout({flexDirection: 'column', rowGap: '12px'})};
    align-self: stretch;
    
`