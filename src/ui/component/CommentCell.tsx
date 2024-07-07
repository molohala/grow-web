import React from 'react';

import S from './CommentCell.style';
import GrowAvatar, {AvatarType} from "@designsystem/component/avatar/GrowAvatar";
import {CommentResponse} from "@repository/comment/response/Comment.response";
import CustomDate from "@util/CustomDate";

interface CommentCellProps {
    comment: CommentResponse
}

const CommentCell = (
    {
        comment
    }: CommentCellProps
) => {
    return (
        <S.Container>
            <GrowAvatar type={AvatarType.Large}/>
            <S.InfoContainer>
                <S.UserInfoContainer>
                    <S.WriterName>{comment.name}</S.WriterName>
                    <S.CreatedAt>{new CustomDate(comment.createdAt).getTimeAgo()}</S.CreatedAt>
                </S.UserInfoContainer>
                <S.CommentContent>{comment.content}</S.CommentContent>
            </S.InfoContainer>
        </S.Container>
    );
};

export default CommentCell;