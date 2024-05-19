import axios, {AxiosRequestConfig} from "axios";
import Config from "../../config/Config";

const createAxiosInstance = (config?: AxiosRequestConfig) => {
    const baseConfig: AxiosRequestConfig = {
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
    };
    return axios.create({
        ...baseConfig,
        ...config,
    });
};

export const growAxios = createAxiosInstance({
    baseURL: Config.GROW_URL,
    headers: {
        'Authorization': `Bearer {token.getToken(ACCESS_TOKEN_KEY)}`!,
    },
});

// growAxios.interceptors.request.use(requestHandler, (res) => res);
// growAxios.interceptors.response.use((res) => res, errorResponseHandler);