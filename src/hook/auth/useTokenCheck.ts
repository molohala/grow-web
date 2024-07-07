import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import token, {ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY} from "@lib/token/token";

const useTokenCheck = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (
            token.getToken(ACCESS_TOKEN_KEY) === undefined ||
            token.getToken(REFRESH_TOKEN_KEY) === undefined
        ) {
            navigate("/sign-in");
        } else if (window.location.toString().includes('sign-in')) {
            navigate('/');
        }
    }, [navigate]);
};

export default useTokenCheck;