import {InView} from "react-intersection-observer";

import Spacer from "@designsystem/component/spacer/Spacer";
import GrowAvatar, {AvatarType} from "@designsystem/component/avatar/GrowAvatar";
import GrowLikeButton from "@designsystem/component/button/likebutton/GrowLikeButton";
import GrowDivider, {DividerType} from "@designsystem/component/divider/GrowDivider";

import {ForumResponse} from "@repository/forum/response/Forum.response";

import CustomDate from "@util/CustomDate";

import * as S from '@ui/forum/cell/ForumCell.style';

interface ForumCellProps {
    forum: ForumResponse
    onClick: () => void
    onAppear: () => void
    onLikeClicked: () => void
}

const ForumCell = (
    {
        forum,
        onClick,
        onAppear,
        onLikeClicked
    }: ForumCellProps
) => {
    return (
        <InView style={{display: 'flex'}} onChange={(inView, entry) => {
            if (inView) {
                onAppear();
            }
        }}>
            <S.Container onClick={onClick}>
                <S.InfoContainer>
                    <GrowAvatar type={AvatarType.Medium}/>
                    <S.ProfileContainer>
                        <S.ProfileName>{forum.community.writerName}</S.ProfileName>
                        <S.ProfileCreatedAt>{new CustomDate(forum.community.createdAt).getTimeAgo()}</S.ProfileCreatedAt>
                    </S.ProfileContainer>
                    <Spacer/>
                </S.InfoContainer>
                <S.Content>{forum.community.content}</S.Content>
                <GrowLikeButton isLiked={forum.community.liked} like={forum.community.like} onClick={(e) => {
                    e.stopPropagation();
                    onLikeClicked();
                }}/>
                {forum.recentComment && <>
                    <GrowDivider type={DividerType.Thin}/>
                    <S.RecentCommentContainer>
                        <S.RecentCommentName>{forum.recentComment.name}</S.RecentCommentName>
                        <S.RecentCommentContent>{forum.recentComment.content}</S.RecentCommentContent>
                        <S.RecentCommentCreatedAt>{new CustomDate(forum.recentComment.createdAt).getTimeAgo()}</S.RecentCommentCreatedAt>
                    </S.RecentCommentContainer>
                </>}
            </S.Container>
        </InView>
    )
};


export default ForumCell;