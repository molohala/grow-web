import * as S from './ForumCell.style';
import Spacer from "../../../designsystem/component/spacer/Spacer";
import GrowAvatar, {AvatarType} from "../../../designsystem/component/avatar/GrowAvatar";
import GrowLikeButton from "../../../designsystem/component/button/likebutton/GrowLikeButton";
import GrowDivider, {DividerType} from "../../../designsystem/component/divider/GrowDivider";

const ForumCell = () => {
    return (
        <S.Container>
            <S.InfoContainer>
                <GrowAvatar type={AvatarType.Medium}/>
                <S.ProfileContainer>
                    <S.ProfileName>이슬아</S.ProfileName>
                    <S.ProfileCreatedAt>2일전</S.ProfileCreatedAt>
                </S.ProfileContainer>
                <Spacer/>
            </S.InfoContainer>
            <S.Content>
                정말 반갑 ㅎㅇㅎㅇㅎㅇ
            </S.Content>
            <GrowLikeButton isLiked={true} like={31} onClick={() => {
            }}/>
            <GrowDivider type={DividerType.Thin}/>
            <S.RecentCommentContainer>
                <S.RecentCommentName>이강현</S.RecentCommentName>
                <S.RecentCommentContent>정말 ㅎㅇ</S.RecentCommentContent>
                <S.RecentCommentCreatedAt>3시간 전</S.RecentCommentCreatedAt>
            </S.RecentCommentContainer>
        </S.Container>
    )
};


export default ForumCell;