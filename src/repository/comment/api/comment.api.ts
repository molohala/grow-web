import {growAxios} from "@repository/global/growAxios";
import {CommentResponse} from "@repository/comment/response/Comment.response";
import CreateCommentRequest from "@repository/comment/request/CreateComment.request";
import {BaseResponse, BaseVoidResponse} from "@repository/global/Base.response";
import EditCommentRequest from "@repository/comment/request/EditComment.request";

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

const commentApi = new CommentApi();

export default commentApi;