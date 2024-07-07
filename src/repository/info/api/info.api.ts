import {BaseResponse, BaseVoidResponse} from "@repository/global/Base.response";
import {growAxios} from "@repository/global/growAxios";
import SolvedacResponse from "@repository/like/response/Solvedac.response";
import SocialIdRequest from "@repository/like/request/SocialId.request";
import {GithubResponse} from "@repository/like/response/Github.response";
import ProfileResponse from "@repository/like/response/Profile.response";
import PatchMyProfileRequest from "@repository/like/request/PatchMyProfile.request";

class InfoApi {
    private static path = "info"

    async getSolvedac(name: string): Promise<BaseResponse<SolvedacResponse>> {
        const {data} = await growAxios.get(`/${InfoApi.path}/solvedac?name=${name}`);
        return data;
    }

    async registerSolvedac(req: SocialIdRequest): Promise<BaseVoidResponse> {
        const {data} = await growAxios.post(`/${InfoApi.path}/solvedac`, req);
        return data;
    }

    async getGithub(name: string): Promise<BaseResponse<GithubResponse>> {
        const {data} = await growAxios.get(`/${InfoApi.path}/github?name=${name}`);
        return data;
    }

    async registerGithub(req: SocialIdRequest): Promise<BaseVoidResponse> {
        const {data} = await growAxios.post(`/${InfoApi.path}/github`, req);
        return data;
    }

    async getProfile(): Promise<BaseResponse<ProfileResponse>> {
        const {data} = await growAxios.get(`/${InfoApi.path}/me`);
        return data;
    }

    async getProfileById(id: number): Promise<BaseResponse<ProfileResponse>> {
        const {data} = await growAxios.get(`/${InfoApi.path}/user/${id}`);
        return data;
    }

    async patchMyProfile(req: PatchMyProfileRequest): Promise<BaseVoidResponse> {
        const {data} = await growAxios.patch(`/${InfoApi.path}/me`, req);
        return data;
    }

    async getJobs(): Promise<BaseResponse<string[]>> {
        const {data} = await growAxios.get(`/${InfoApi.path}/jobs`);
        return data;
    }
}

const infoApi = new InfoApi();

export default infoApi;