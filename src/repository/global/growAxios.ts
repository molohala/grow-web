import axios, {AxiosRequestConfig} from "axios";
import Config from "../../config/Config";
import errorResponseHandler from "./errorResponseHandler";
import requestHandler from "./requestHandler";

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
    baseURL: Config.GROW_URL
});

growAxios.interceptors.request.use(requestHandler, (res) => res);
growAxios.interceptors.response.use((res) => res, errorResponseHandler);