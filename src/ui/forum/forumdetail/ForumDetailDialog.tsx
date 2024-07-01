import React, {useEffect, useRef, useState} from 'react';
import {ForumResponse} from "../../../repository/forum/response/Forum.response";
import S from "./ForumDetailDialog.style";
import GrowDivider from "../../../designsystem/component/divider/GrowDivider";
import Spacer from "../../../designsystem/component/spacer/Spacer";
import GrowIcon, {IconType} from "../../../designsystem/foundation/iconography/GrowIcon";
import {css, useTheme} from "styled-components";
import GrowAvatar, {AvatarType} from "../../../designsystem/component/avatar/GrowAvatar";
import '../../../util/CustomDate';
import CustomDate from "../../../util/CustomDate";
import useComment from "../../../hook/comment/useComment";
import GrowLikeButton from "../../../designsystem/component/button/likebutton/GrowLikeButton";
import GrowLoader from "../../../designsystem/component/loader/GrowLoader";
import CommentCell from "../../component/CommentCell";
import useLike from "../../../hook/like/useLike";
import GrowTextField from "../../../designsystem/component/textfield/GrowTextField";

interface ForumDetailDialogProps {
    forum: ForumResponse;
    dismiss: () => void;
    updateForumLiked: () => void;
}

const ForumDetailDialog = (
    {
        forum,
        dismiss,
        updateForumLiked
    }: ForumDetailDialogProps
) => {

    const {patchLike} = useLike();
    const theme = useTheme();
    const modalRef = useRef<HTMLDialogElement>(null);
    const {
        comments,
        fetchComments,
        isFetchComments,
        createComment
    } = useComment();
    const [comment, setComment] = useState('');

    useEffect(() => {
        modalRef.current?.showModal();
        fetchComments(forum.community.communityId).then();
    }, [fetchComments, forum.community.communityId]);

    const handleBackgroundClicked = () => {
        dismiss();
    }

    const handleLikeClicked = async () => {
        const result = await patchLike(forum.community.communityId);
        if (result) {
            updateForumLiked();
        }
    }

    const handleSubmit = async () => {
        const result = await createComment({
            content: comment,
            communityId: forum.community.communityId
        });
        if (result) {
            setComment('');
            await fetchComments(forum.community.communityId);
        }
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
                    <GrowLikeButton
                        like={forum.community.like}
                        onClick={handleLikeClicked}
                        isLiked={forum.community.liked}
                    />
                </S.Content>
                {isFetchComments && <GrowLoader/>}
                {comments.length > 0 && (
                    <>
                        <GrowDivider/>
                        <S.Comments>
                            {comments.map((comment, index) => (
                                <CommentCell key={index} comment={comment}/>
                            ))}
                        </S.Comments>
                    </>
                )}

                <S.InputContainer>
                    <GrowTextField
                        customStyle={css`
                            flex: 1;
                            border-radius: 100px;
                        `}
                        text={comment}
                        onChange={text => setComment(text)}
                        hint={'댓글을 남겨보세요'}
                    />
                    <S.SendButton onClick={handleSubmit}>
                        <GrowIcon
                            type={IconType.Send}
                            size={28}
                            tint={comment.length > 0 ? theme.textFieldIcon : theme.textFieldIconDisabled}
                        />
                    </S.SendButton>
                </S.InputContainer>
            </S.Container>
            <S.Backdrop onClick={handleBackgroundClicked}/>
        </S.DialogContainer>
    );
};

export default ForumDetailDialog;