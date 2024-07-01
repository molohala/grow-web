import {useCallback, useState} from "react";
import commentApi from "../../repository/comment/api/comment.api";
import {CommentResponse} from "../../repository/comment/response/Comment.response";
import CreateCommentRequest from "../../repository/comment/request/CreateComment.request";

const useComment = (): {
    comments: CommentResponse[];
    fetchComments: (forumId: number) => Promise<void>;
    isFetchComments: boolean;
    createComment: (req: CreateCommentRequest) => Promise<boolean>;
} => {

    const [comments, setComments] = useState<CommentResponse[]>([]);
    const [isFetchComments, setIsFetchComments] = useState(true);

    const fetchComments = useCallback(async (forumId: number) => {
        setIsFetchComments(true);
        try {
            const response = await commentApi.getComments(forumId);
            const comments = response.data?.sort(
                (a, b) => a.createdAt < b.createdAt ? 1 : -1
            ) ?? []
            setComments(comments);
        } catch (e) {
            // console.error(e);
        } finally {
            setIsFetchComments(false);
        }
    }, []);

    const createComment = useCallback(async (req: CreateCommentRequest) => {
        try {
            await commentApi.createComment(req);
            return true;
        } catch (e) {
            // console.error(e);
            return false;
        }
    }, []);

    return {
        comments,
        fetchComments,
        isFetchComments,
        createComment
    };
};

export default useComment;
