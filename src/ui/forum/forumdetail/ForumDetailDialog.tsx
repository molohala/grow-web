import React, {useEffect, useRef} from 'react';
import {ForumResponse} from "../../../repository/forum/response/Forum.response";
import S from "./ForumDetailDialog.style";
import GrowDivider from "../../../designsystem/component/divider/GrowDivider";
import Spacer from "../../../designsystem/component/spacer/Spacer";
import GrowIcon, {IconType} from "../../../designsystem/foundation/iconography/GrowIcon";
import {useTheme} from "styled-components";
import GrowAvatar, {AvatarType} from "../../../designsystem/component/avatar/GrowAvatar";
import '../../../util/CustomDate';
import CustomDate from "../../../util/CustomDate";
import useComment from "../../../hook/comment/useComment";
import GrowLikeButton from "../../../designsystem/component/button/likebutton/GrowLikeButton";
import GrowLoader from "../../../designsystem/component/loader/GrowLoader";

interface ForumDetailDialogProps {
    forum: ForumResponse;
    dismiss: () => void;
}

const ForumDetailDialog = (
    {
        forum,
        dismiss
    }: ForumDetailDialogProps
) => {

    const theme = useTheme();
    const modalRef = useRef<HTMLDialogElement>(null);
    const {comments, fetchComments, isFetchComments} = useComment();

    useEffect(() => {
        modalRef.current?.showModal();
        fetchComments(forum.community.communityId).then();
    }, []);

    const handleBackgroundClicked = () => {
        dismiss();
    }

    return (
        <S.DialogContainer ref={modalRef}>
            <S.Container>
                <S.Content>
                    <S.InfoContainer>
                        <GrowAvatar type={AvatarType.Medium}/>
                        <S.UserInfoContainer>
                            <S.WriterName>{forum.community.writerName}</S.WriterName>
                            <S.CreatedAt>{new CustomDate(forum.community.createdAt).getTimeAgo()}</S.CreatedAt>
                        </S.UserInfoContainer>
                        <Spacer/>
                        <GrowIcon type={IconType.DetailVertical} tint={theme.textAlt}/>
                    </S.InfoContainer>
                    <S.ForumContent>{forum.community.content}</S.ForumContent>
                    <GrowLikeButton like={forum.community.like} onClick={() => {
                    }} isLiked={forum.community.liked}/>
                </S.Content>
                <GrowDivider/>
                <S.Comments>
                    {isFetchComments && <GrowLoader/>}
                    {comments.map((comment, index) => (
                        <div>{comment.content}</div>
                    ))}
                </S.Comments>
            </S.Container>
            <S.Backdrop onClick={handleBackgroundClicked}/>
        </S.DialogContainer>
    );
};

export default ForumDetailDialog;