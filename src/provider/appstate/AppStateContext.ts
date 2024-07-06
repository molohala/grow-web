import { createContext } from "react";
import ProfileResponse from "../../repository/like/response/Profile.response";
import SolvedacResponse from "../../repository/like/response/Solvedac.response";
import {GithubResponse} from "../../repository/like/response/Github.response";
import LanguageResponse from "../../repository/language/response/Language.response";

export type AppStateContextProps = {
    profile: ProfileResponse | null;
    solvedac: SolvedacResponse | null;
    github: GithubResponse | null;
    languages: LanguageResponse[] | null;
    fetchProfile: () => Promise<void>;
    fetchLanguages: () => Promise<void>;
};

export const AppStateContext = createContext<AppStateContextProps>({
    profile: null,
    solvedac: null,
    github: null,
    languages: null,
    fetchProfile: async () => {},
    fetchLanguages: async () => {}
});