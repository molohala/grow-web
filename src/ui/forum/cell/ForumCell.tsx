import * as S from './ForumCell.style';
import Spacer from "../../../designsystem/component/spacer/Spacer";
import GrowAvatar, {AvatarType} from "../../../designsystem/component/avatar/GrowAvatar";
import GrowLikeButton from "../../../designsystem/component/button/likebutton/GrowLikeButton";
import GrowDivider, {DividerType} from "../../../designsystem/component/divider/GrowDivider";
import {ForumResponse} from "../../../repository/forum/response/Forum.response";
import '../../../util/dateUtil';

interface ForumCellProps {
    forum: ForumResponse
}

const ForumCell = (
    {
        forum
    }: ForumCellProps
) => {
    return (
        <S.Container>
            <S.InfoContainer>
                <GrowAvatar type={AvatarType.Medium}/>
                <S.ProfileContainer>
                    <S.ProfileName>{forum.community.writerName}</S.ProfileName>
                    <S.ProfileCreatedAt>{new Date(forum.community.createdAt).timeAgo()}</S.ProfileCreatedAt>
                </S.ProfileContainer>
                <Spacer/>
            </S.InfoContainer>
            <S.Content>{forum.community.content}</S.Content>
            <GrowLikeButton isLiked={forum.community.liked} like={forum.community.like} onClick={() => {
            }}/>
            {forum.recentComment && <>
                <GrowDivider type={DividerType.Thin}/>
                <S.RecentCommentContainer>
                    <S.RecentCommentName>이강현</S.RecentCommentName>
                    <S.RecentCommentContent>정말 ㅎㅇ</S.RecentCommentContent>
                    <S.RecentCommentCreatedAt>3시간 전</S.RecentCommentCreatedAt>
                </S.RecentCommentContainer>
            </>}
        </S.Container>
    )
};


export default ForumCell;