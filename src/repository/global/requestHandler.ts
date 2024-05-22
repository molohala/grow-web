import { AxiosRequestConfig } from "axios";
import token, {ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY, REQUEST_TOKEN_KEY} from "../../lib/token/token";
import Config from "../../config/Config";

const requestHandler = (config: AxiosRequestConfig) => {
    if (
        token.getToken(ACCESS_TOKEN_KEY) === undefined ||
        token.getToken(REFRESH_TOKEN_KEY) === undefined
    ) {
        // window.location.href = `${Config.BASE_URL}/sign-in`;
    } else {
        for (const url of [
            `auth/reissue`,
            `auth/sign-in`
        ]) {
            console.log(config.url);
            console.log(url);
            if (config.url?.includes(url)) {
                console.log('return');
                return config;
            }
        }

        config.headers = {
            [REQUEST_TOKEN_KEY]: `Bearer ${token.getToken(ACCESS_TOKEN_KEY)}`,
        };
    }

    return config;
};

export default requestHandler;