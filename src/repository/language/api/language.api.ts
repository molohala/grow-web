import {growAxios} from "@repository/global/growAxios";
import LanguageResponse from "@repository/language/response/Language.response";
import {BaseResponse, BaseVoidResponse} from "@repository/global/Base.response";
import PatchMyLanguageRequest from "@repository/language/request/PatchMyLanguage.request";

class LanguageApi {
    private static path = 'language'

    async getLanguage(): Promise<BaseResponse<LanguageResponse[]>> {
        const {data} = await growAxios.get(`${LanguageApi.path}/me`);
        return data;
    }

    async patchLanguage(req: PatchMyLanguageRequest): Promise<BaseVoidResponse> {
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