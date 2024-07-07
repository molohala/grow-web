import React, {useEffect, useState} from 'react';
import {css, useTheme} from "styled-components";

import {ForumResponse} from "@repository/forum/response/Forum.response";

import CustomDate from "@util/CustomDate";

import useLike from "@hook/like/useLike";
import useComment from "@hook/comment/useComment";

import GrowDivider from "@designsystem/component/divider/GrowDivider";
import Spacer from "@designsystem/component/spacer/Spacer";
import GrowIcon, {IconType} from "@designsystem/foundation/iconography/GrowIcon";
import GrowAvatar, {AvatarType} from "@designsystem/component/avatar/GrowAvatar";
import GrowLikeButton from "@designsystem/component/button/likebutton/GrowLikeButton";
import GrowLoader from "@designsystem/component/loader/GrowLoader";
import GrowTextField from "@designsystem/component/textfield/GrowTextField";

import DialogTemplate from "@ui/template/DialogTemplate";
import CommentCell from "@ui/component/CommentCell";

import S from "./ForumDetailDialog.style";

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

    const {
        comments,
        fetchComments,
        isFetchComments,
        createComment
    } = useComment();
    const [comment, setComment] = useState('');

    useEffect(() => {
        fetchComments(forum.community.communityId).then();
    }, [fetchComments, forum.community.communityId]);

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
    };

    return (
        <DialogTemplate dismiss={dismiss}>
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
        </DialogTemplate>
    );
};

export default ForumDetailDialog;