import { useEffect, useState } from "react";
import Cookie from "../../lib/cookie/cookie";

const useDarkTheme = (): [
    isDarkTheme: boolean,
    handleDarkTheme: (isDarkTheme: boolean) => void
] => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const handleDarkTheme = (isDarkTheme: boolean) => {
        Cookie.setCookie('darkTheme', isDarkTheme ? 'dark' : 'light');
        setIsDarkTheme(isDarkTheme);
    };

    useEffect(() => {
        const darkTheme = Cookie.getCookie('darkTheme');
        if (darkTheme === undefined) {
            handleDarkTheme(true);
            return;
        }
        const isDarkTheme = darkTheme === 'dark';
        setIsDarkTheme(isDarkTheme);
    }, []);

    return [
        isDarkTheme,
        handleDarkTheme
    ];
};
export default useDarkTheme;