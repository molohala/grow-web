import styled from "styled-components";

import FlexLayout from "@designsystem/util/FlexLayout";
import {Fonts, Font} from "@designsystem/foundation/text/Fonts";

export const Container = styled.div`
    // Layout
    ${FlexLayout({flexDirection: 'column', rowGap: '12px', alignItems: 'flex-start'})};
    padding: 12px;
    flex: 1;
    
    // Style
    border-radius: 12px;
    background: ${({theme}) => theme.background};
    border: none;
    
    // Interaction
    cursor: pointer;
`

export const InfoContainer = styled.div`
    ${FlexLayout({columnGap: '8px'})};
    align-items: center;
`

export const ProfileContainer = styled.div`
    ${FlexLayout({flexDirection: 'column', alignItems: 'flex-start'})};
`

export const ProfileName = styled.div`
    color: ${({theme}) => theme.textNormal};
    ${Fonts[Font.BodyB]};
`

export const ProfileCreatedAt = styled.div`
    color: ${({theme}) => theme.textAlt};
    ${Fonts[Font.LabelM]};
`

export const Content = styled.p`
    color: ${({theme}) => theme.textNormal};
    ${Fonts[Font.BodyR]};
    ${FlexLayout({})};
    text-align: start;
    width: 100%;
    word-break: break-all;
`;

export const RecentCommentContainer = styled.div`
    ${FlexLayout({columnGap: '4px', alignItems: 'center'})};
    align-self: stretch;
`

export const RecentCommentName = styled.div`
    color: ${({theme}) => theme.textNormal};
    ${Fonts[Font.LabelB]};
    white-space: nowrap;
`;

export const RecentCommentContent = styled.p`
    color: ${({theme}) => theme.textNormal};
    ${Fonts[Font.LabelR]};
    ${FlexLayout({})};
    text-align: start;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    word-break: break-all;
    overflow: hidden;
`;

export const RecentCommentCreatedAt = styled.div`
    color: ${({theme}) => theme.textAlt};
    ${Fonts[Font.LabelM]};
    white-space: nowrap;
`;