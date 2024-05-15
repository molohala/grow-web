import styled, {css} from "styled-components";
import {FlexLayout} from "../../../util/FlexLayout";

export const GrowToggleButtonStyle = styled.button<{
    checked: boolean;
}>`
    // Layout
    height: 31px;
    width: 51px;
    ${FlexLayout({alignItems: 'center'})};
    justify-content: ${({checked}) => checked ? 'flex-end' : 'flex-start'};
    outline: none;
    border: none;
    
    // Style
    background-color: ${({checked, theme}) => checked ? theme.buttonPrimary : theme.buttonPrimaryDisabled};
    border-radius: calc(31px / 2);
    cursor: pointer;
`;

export const Indicator = styled.div`
    // Layout
    width: 27px;
    height: 27px;
    background-color: white;
    margin: 0 2px;
    border-radius: 50%;
`;