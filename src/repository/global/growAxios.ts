import axios, {AxiosRequestConfig} from "axios";
import Config from "../../config/Config";
import token, {ACCESS_TOKEN_KEY, REQUEST_TOKEN_KEY} from "../../lib/token/token";
import errorResponseHandler from "./errorResponseHandler";
import requestHandler from "./requestHandler";

const createAxiosInstance = (config?: AxiosRequestConfig) => {
    const baseConfig: AxiosRequestConfig = {
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
    };
    return axios.create({
        // ...baseConfig,
        ...config,
    });
};

export const growAxios = createAxiosInstance({
    baseURL: Config.GROW_URL
});

export const growAxiosSetAccessToken = (token: string) => {
    growAxios.defaults.headers.common[REQUEST_TOKEN_KEY] = `Bearer ${token}`;
};

growAxios.interceptors.request.use(requestHandler, (res) => res);
growAxios.interceptors.response.use((res) => res, errorResponseHandler);