import styled from "styled-components";
import FlexLayout from "@designsystem/util/FlexLayout";
import {Fonts, Font} from "@designsystem/foundation/text/Fonts";

export const GrowLanguageStyle = styled.div`
    // Layout
    ${FlexLayout({justifyContent: 'center', alignItems: 'center'})};
    padding: 0 12px;
    height: 34px;

    // Style
    ${Fonts[Font.LabelM]};
    color: ${({theme}) => theme.textDarken};
    background-color: ${({theme}) => theme.background};
    border-radius: 17px;
    
    // Interaction
    user-select: none;
`;