import { createContext } from "react";
import ProfileResponse from "../../repository/like/response/Profile.response";
import SolvedacResponse from "../../repository/like/response/Solvedac.response";
import {GithubResponse} from "../../repository/like/response/Github.response";

export type AppStateContextProps = {
    profile: ProfileResponse | null;
    solvedac: SolvedacResponse | null;
    github: GithubResponse | null;
    fetchProfile: () => Promise<void>;
};

export const AppStateContext = createContext<AppStateContextProps>({
    profile: null,
    solvedac: null,
    github: null,
    fetchProfile: async () => {},
});