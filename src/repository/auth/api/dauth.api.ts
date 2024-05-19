import {DAuthSignInRequest} from "../request/DAuthSignIn.request";
import axios from "axios";
import {BaseResponse} from "../../global/Base.response";
import {DAuthSignInResponse} from "../response/DAuthSignIn.response";

class DauthAPI {
    async signIn(signIn: DAuthSignInRequest): Promise<BaseResponse<DAuthSignInResponse>> {
        const {data} = await axios.post("https://dauth.b1nd.com/api/auth/login/", signIn);
        return data;
    }
}

export default new DauthAPI();
