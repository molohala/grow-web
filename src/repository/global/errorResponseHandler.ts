import {AxiosError} from "axios";
import token, {ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY, REQUEST_TOKEN_KEY} from "../../lib/token/token";
import authApi from "../auth/api/auth.api";
import {growAxios} from "./growAxios";

let refreshSubscribers: ((accessToken: string) => void)[] = [];

const onTokenRefreshed = (accessToken: string) => {
    refreshSubscribers.forEach((callback) => callback(accessToken));
};

const addRefreshSubscriber = (callback: (accessToken: string) => void) => {
    refreshSubscribers.push(callback);
};

// 리프레쉬 작업중인지 아닌지를 구분하는 변수
let isRefreshing = false;

const errorResponseHandler = async (error: AxiosError) => {
    if (error.response) {
        const {
            config: originalRequest,
            response: {status},
        } = error;

        const usingAccessToken = token.getToken(ACCESS_TOKEN_KEY);
        const usingRefreshToken = token.getToken(REFRESH_TOKEN_KEY);

        if (
            usingAccessToken !== undefined &&
            usingRefreshToken !== undefined &&
            status === 401
        ) {
            // 아무 요청중 하나하도 리프레쉬 작업중이 아니라면
            if (!isRefreshing) {
                //리프레쉬 작업을 시작함
                isRefreshing = true;

                //리프레쉬 api 요청
                console.log('start refresh');
                try {
                    const {data} = await authApi.reissue({
                        refreshToken: usingRefreshToken
                    });

                    const newAccessToken = data?.accessToken ?? ""

                    growAxios.defaults.headers.common[REQUEST_TOKEN_KEY] = `Bearer ${newAccessToken}`;
                    token.setToken(ACCESS_TOKEN_KEY, newAccessToken);

                    //리프레쉬 작업을 마침
                    isRefreshing = false;

                    //새로 받은 accessToken 을 기반으로 이때까지 밀려있던 요청을 모두 처리
                    onTokenRefreshed(newAccessToken);
                } catch (error) {
                    //리프레쉬 하다가 오류난거면 리프레쉬도 만료된 것이므로 다시 로그인
                    // token.clearToken();
                    // window.location.href = `${Config.BASE_URL}/sign-in`;
                    console.error(error);
                    console.log('refresh error');
                }
            }

            //어떤 요청이 리프레쉬 작업중이라면 여기로 와서 그 후에 요청된 다른 API Promise를 refreshSubscribers에 넣어줌
            return new Promise((resolve) => {
                addRefreshSubscriber((accessToken: string) => {
                    originalRequest!.headers![REQUEST_TOKEN_KEY] = `Bearer ${accessToken}`;
                    resolve(growAxios(originalRequest));
                });
            });
        }
    }

    return Promise.reject(error);
};

export default errorResponseHandler;

