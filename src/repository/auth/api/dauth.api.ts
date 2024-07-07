import axios from "axios";

import {BaseResponse} from "@repository/global/Base.response";
import {DAuthSignInRequest} from "@repository/auth/request/DAuthSignIn.request";
import {DAuthSignInResponse} from "@repository/auth/response/DAuthSignIn.response";

class DauthAPI {
    async signIn(signIn: DAuthSignInRequest): Promise<BaseResponse<DAuthSignInResponse>> {
        const {data} = await axios.post("https://dauth.b1nd.com/api/auth/login/", signIn);
        return data;
    }
}

const dauthApi = new DauthAPI();

export default dauthApi;
