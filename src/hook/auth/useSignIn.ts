import {useCallback, useState} from "react";
import {DAuthSignInRequest} from "../../repository/auth/request/DAuthSignIn.request";
import Config from "../../config/Config";
import dauthApi from "../../repository/auth/api/dauth.api";
import authApi from "../../repository/auth/api/auth.api";
import token, {ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY} from "../../lib/token/token";
import {useNavigate} from "react-router-dom";

const useSignIn = () => {

    const navigate = useNavigate();
    const [signIn, setSignIn] = useState<DAuthSignInRequest>({
        id: '',
        pw: '',
        clientId: '',
        redirectUrl: '',
    });

    const handleId = useCallback(
        (id: string): void => {
            setSignIn(prev => ({...prev, id}));
        },
        [signIn]
    );

    const handlePw = useCallback(
        (pw: string): void => {
            setSignIn(prev => ({...prev, pw}));
        },
        [signIn]
    );

    const submitSignIn = useCallback(
        async () => {
            const req: DAuthSignInRequest = {
                id: signIn.id,
                pw: signIn.pw,
                clientId: Config.DAUTH_CLIENT_ID ?? '',
                redirectUrl: Config.DAUTH_REDIRECT_URL ?? '',
            };
            try {
                const {data} = await dauthApi.signIn(req);
                const code = data!.location.split("=")[1].split("&state")[0];
                const res = await authApi.signIn(code);
                token.setToken(ACCESS_TOKEN_KEY, res.data?.accessToken ?? '');
                token.setToken(REFRESH_TOKEN_KEY, res.data?.refreshToken ?? '');
                navigate(`/`);
            } catch (e) {
                alert('로그인 실패');
            }
        },
        [signIn]
    )

    return {
        signIn,
        handleId,
        handlePw,
        submitSignIn
    };
};

export default useSignIn;