import LanguageResponse from "../response/Language.response";
import {growAxios} from "../../global/growAxios";
import PatchMyProfileRequest from "../../like/request/PatchMyProfile.request";
import {BaseResponse, BaseVoidResponse} from "../../global/Base.response";

class LanguageApi {
    private static path = 'language'

    async getLanguage(): Promise<BaseResponse<LanguageResponse[]>> {
        const {data} = await growAxios.get(`${LanguageApi.path}/me`);
        return data;
    }

    async patchLanguage(req: PatchMyProfileRequest): Promise<BaseVoidResponse> {
        const {data} = await growAxios.patch(`${LanguageApi.path}/me`, req);
        return data;
    }

    async getAllLanguages(): Promise<BaseResponse<LanguageResponse[]>> {
        const {data} = await growAxios.get(`${LanguageApi.path}`);
        return data;
    }

    async getLanguageById(id: number): Promise<BaseResponse<LanguageResponse[]>> {
        const {data} = await growAxios.get(`${LanguageApi.path}/${id}`);
        return data;
    }
}

const languageApi = new LanguageApi();

export default languageApi;