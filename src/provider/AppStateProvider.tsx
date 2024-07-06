import {ReactNode} from "react";
import {ThemeContext} from "styled-components";

interface AppStateProviderProps {
    children: ReactNode;
}

const AppStateProvider = (
    {
        children
    }: AppStateProviderProps
) => {
    <ThemeContext.Provider value={{}}>{children}</ThemeContext.Provider>
}

export default AppStateProvider;