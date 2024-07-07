import cookie from "@lib/cookie/cookie";

export const REQUEST_TOKEN_KEY = "Authorization" as const;
export const ACCESS_TOKEN_KEY = "access-token" as const;
export const REFRESH_TOKEN_KEY = "refresh-token" as const;

class Token {
    public getToken(key: string): string | undefined {
        return cookie.getCookie(key);
    }

    public setToken(key: string, token: string): void {
        cookie.setCookie(key, token);
    }

    public clearToken() {
        cookie.removeCookie(ACCESS_TOKEN_KEY);
        cookie.removeCookie(REFRESH_TOKEN_KEY);
    }
}

const token = new Token();

export default token;