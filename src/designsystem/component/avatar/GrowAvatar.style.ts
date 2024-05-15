import styled from "styled-components";
import {FlexLayout} from "../../util/FlexLayout";

export const GrowAvatarStyle = styled.div<{
    size: number;
}>`
    // Layout
    width: ${({size}) => size}px;
    height: ${({size}) => size}px;
    border-radius: 50%;
    ${FlexLayout({justifyContent: 'center', alignItems: 'center'})}

    // Style
    background-color: ${({theme}) => theme.avatarBackground};
`;

export const AvatarImage = styled.img<{
    size: number;
}>`
    // Layout
    width: ${({size}) => size}px;
    height: ${({size}) => size}px;
    border-radius: 50%;
    object-fit: cover;
`;