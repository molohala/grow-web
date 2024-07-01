import styled from "styled-components";
import {FlexLayout} from "../../util/FlexLayout";
import {GrowTypographies, TypographyType} from "../../foundation/text/GrowTypographies";

export const GrowLanguageStyle = styled.div`
    // Layout
    ${FlexLayout({justifyContent: 'center', alignItems: 'center'})};
    padding: 0 12px;
    height: 34px;

    // Style
    ${GrowTypographies[TypographyType.LabelM]};
    color: ${({theme}) => theme.textDarken};
    background-color: ${({theme}) => theme.background};
    border-radius: 17px;
    
    // Interaction
    user-select: none;
`;