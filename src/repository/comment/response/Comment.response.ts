import CustomDate from "../../../util/CustomDate";

export interface CommentResponse {
    commentId: string;
    content: string;
    createdAt: string;
    memberId: number;
    name: string;
}