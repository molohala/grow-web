import { useEffect, useState } from "react";
import Cookie from "../cookie/cookie";

export const useDarkTheme = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    useEffect(() => {
        const darkTheme = Cookie.getCookie('darkTheme');
        if (darkTheme === undefined) {
            handleDarkTheme(true);
            return;
        }
        const isDarkTheme = darkTheme === 'dark';
        setIsDarkTheme(isDarkTheme);
    }, []);

    const handleDarkTheme = (isDarkTheme: boolean) => {
        Cookie.setCookie('darkTheme', isDarkTheme ? 'dark' : 'light');
        setIsDarkTheme(isDarkTheme);
    };

    return [isDarkTheme, handleDarkTheme];
};