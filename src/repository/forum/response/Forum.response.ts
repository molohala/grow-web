import {CommentResponse} from "../../comment/response/Comment.response";

export interface ForumResponse {
    community: ForumContentResponse;
    recentComment: CommentResponse;
}

export interface ForumContentResponse {
    communityId: number;
    content: string;
    createdAt: string;
    like: number;
    writerName: string;
    writerId: number;
    liked: boolean;
}