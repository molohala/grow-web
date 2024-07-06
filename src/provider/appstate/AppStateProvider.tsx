import {ReactNode, useEffect} from "react";
import useAppState from "../../hook/global/useAppState";
import {AppStateContext} from "./AppStateContext";

interface AppStateProviderProps {
    children: ReactNode;
}

const AppStateProvider = (
    {
        children
    }: AppStateProviderProps
) => {
    const appState = useAppState();

    useEffect(() => {
        appState.fetchProfile().catch();
    }, []);

    return <AppStateContext.Provider value={appState}>{children}</AppStateContext.Provider>;
}

export default AppStateProvider;