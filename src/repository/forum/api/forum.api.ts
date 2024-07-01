import {ForumResponse} from "../response/Forum.response";
import {growAxios} from "../../global/growAxios";
import {BaseResponse, BaseVoidResponse} from "../../global/Base.response";
import {CreateForumRequest} from "../request/CreateForum.request";
import {PatchForumRequest} from "../request/PatchForum.request";

class ForumAPI {

    private static path = 'community'

    async getForums(page: number, size: number): Promise<BaseResponse<[ForumResponse]>> {
        const {data} = await growAxios.get(`${ForumAPI.path}?page=${page}&size=${size}`);
        return data;
    }

    async createForum(request: CreateForumRequest): Promise<BaseVoidResponse> {
        const {data} = await growAxios.post(`${ForumAPI.path}`, request);
        return data;
    }

    async patchForum(request: PatchForumRequest): Promise<BaseVoidResponse> {
        const {data} = await growAxios.patch(`${ForumAPI.path}`, request);
        return data;
    }

    async getForum(id: number): Promise<BaseResponse<ForumResponse>> {
        const {data} = await growAxios.get(`${ForumAPI.path}/${id}`);
        return data;
    }

    async deleteForum(id: number): Promise<BaseVoidResponse> {
        const {data} = await growAxios.delete(`${ForumAPI.path}/${id}`);
        return data;
    }

    async getBestForums(count: number = 3): Promise<BaseResponse<[ForumResponse]>> {
        const {data} = await growAxios.get(`${ForumAPI.path}/best`);
        return data;
    }
}

export default new ForumAPI();