import {growAxios} from "../../global/growAxios";
import {CommentResponse} from "../response/Comment.response";
import CreateCommentRequest from "../request/CreateComment.request";
import {BaseResponse, BaseVoidResponse} from "../../global/Base.response";
import EditCommentRequest from "../request/EditComment.request";

class CommentApi {

    private static path = 'comment';

    async getComments(forumId: number): Promise<BaseResponse<CommentResponse[]>> {
        const {data} = await growAxios.get(`${CommentApi.path}?communityId=${forumId}`);
        return data;
    }

    async createComment(req: CreateCommentRequest): Promise<BaseVoidResponse> {
        const {data} = await growAxios.post(`${CommentApi.path}`, req);
        return data;
    }

    async editComment(req: EditCommentRequest): Promise<BaseVoidResponse> {
        const {data} = await growAxios.patch(`${CommentApi.path}`, req);
        return data;
    }

    async delete(id: number): Promise<BaseVoidResponse> {
        const {data} = await growAxios.delete(`${CommentApi.path}/${id}`);
        return data;
    }
}

export default new CommentApi();