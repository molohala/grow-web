import {growAxios} from "@repository/global/growAxios";
import {BaseResponse} from "@repository/global/Base.response";
import ReissueRequest from "@repository/auth/request/Reissue.request";
import ReissueResponse from "@repository/auth/response/Reissue.response";
import {TokenResponse} from "@repository/auth/response/Token.response";

class AuthAPI {
    async signIn(code: string): Promise<BaseResponse<TokenResponse>> {
        const {data} = await growAxios.post(`auth/sign-in?code=${code}`);
        return data;
    }

    async reissue(request: ReissueRequest): Promise<BaseResponse<ReissueResponse>> {
        const {data} = await growAxios.post(`auth/reissue`, request);
        return data;
    }

    async delete(): Promise<void> {
        const {data} = await growAxios.delete(`auth`);
        return data;
    }
}

const authApi = new AuthAPI();

export default authApi;
