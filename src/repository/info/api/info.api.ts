import {BaseResponse, BaseVoidResponse} from "../../global/Base.response";
import SolvedacResponse from "../../like/response/Solvedac.response";
import {growAxios} from "../../global/growAxios";
import SocialIdRequest from "../../like/request/SocialId.request";
import {GithubResponse} from "../../like/response/Github.response";
import ProfileResponse from "../../like/response/Profile.response";
import PatchMyProfileRequest from "../../like/request/PatchMyProfile.request";

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

    async getProfile(memberId: number): Promise<BaseResponse<ProfileResponse>> {
        const {data} = await growAxios.get(`/${InfoApi.path}/user/${memberId}`);
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

export default InfoApi;