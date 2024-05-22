import styled from "styled-components";
import {FlexLayout} from "../../../designsystem/util/FlexLayout";
import {GrowTypographies, TypographyType} from "../../../designsystem/foundation/text/GrowTypographies";
import {bounceAnimation} from "../../../designsystem/animation/bounceAnimation";
import exp from "node:constants";

export const Container = styled.button`
    // Layout
    ${FlexLayout({flexDirection: 'column', rowGap: '12px'})};
    padding: 12px;

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
    ${GrowTypographies[TypographyType.BodyB]};
`

export const ProfileCreatedAt = styled.div`
    color: ${({theme}) => theme.textAlt};
    ${GrowTypographies[TypographyType.LabelM]};
`

export const Content = styled.p`
    color: ${({theme}) => theme.textNormal};
    ${GrowTypographies[TypographyType.BodyR]};
    display: flex;
    text-align: start;
    width: 100%;
`;

export const RecentCommentContainer = styled.div`
    ${FlexLayout({columnGap: '4px', alignItems: 'center'})};
`

export const RecentCommentName = styled.div`
    color: ${({theme}) => theme.textNormal};
    ${GrowTypographies[TypographyType.LabelB]};
`

export const RecentCommentContent = styled.div`
    color: ${({theme}) => theme.textNormal};
    ${GrowTypographies[TypographyType.LabelR]};
`

export const RecentCommentCreatedAt = styled.div`
    color: ${({theme}) => theme.textAlt};
    ${GrowTypographies[TypographyType.LabelM]};
`