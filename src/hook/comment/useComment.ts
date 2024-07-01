import {useCallback, useState} from "react";
import commentApi from "../../repository/comment/api/comment.api";
import {CommentResponse} from "../../repository/comment/response/Comment.response";

const useComment = (): {
    comments: CommentResponse[];
    fetchComments: (forumId: number) => Promise<void>;
    isFetchComments: boolean;
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
            console.error(e);
        } finally {
            setIsFetchComments(false);
        }
    }, []);

    return {
        comments,
        fetchComments,
        isFetchComments,
    };
};

export default useComment;
