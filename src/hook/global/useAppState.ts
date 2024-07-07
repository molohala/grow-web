import {useCallback, useState} from "react";
import ProfileResponse from "@repository/like/response/Profile.response";
import SolvedacResponse from "@repository/like/response/Solvedac.response";
import {GithubResponse} from "@repository/like/response/Github.response";
import infoApi from "@repository/info/api/info.api";
import LanguageResponse from "@repository/language/response/Language.response";
import languageApi from "@repository/language/api/language.api";

const useAppState = () => {
    const [profile, setProfile] = useState<ProfileResponse | null>(null);
    const [solvedac, setSolvedac] = useState<SolvedacResponse | null>(null);
    const [github, setGithub] = useState<GithubResponse | null>(null);
    const [languages, setLanguages] = useState<LanguageResponse[] | null>(null);

    const fetchSolvedac = useCallback(async (profile: ProfileResponse) => {
        const baekjoonId = profile.socialAccounts.find(social => social.socialType === 'SOLVED_AC');
        if (baekjoonId == null) {
            return;
        }
        try {
            const solvedac = await infoApi.getSolvedac(baekjoonId.socialId);
            setSolvedac(solvedac.data);
        } catch (e) {
            // console.error(e);
        }
    }, []);

    const fetchGithub = useCallback(async (profile: ProfileResponse) => {
        const githubId = profile.socialAccounts.find(social => social.socialType === 'GITHUB');
        if (githubId == null) {
            return;
        }
        try {
            const github = await infoApi.getGithub(githubId.socialId);
            setGithub(github.data);
        } catch (e) {
            // console.error(e);
        }
    }, []);

    const fetchLanguages = useCallback(async () => {
        try {
            const languages = await languageApi.getLanguage();
            setLanguages(languages.data);
        } catch (e) {
            // console.error(e);
        }
    }, []);

    const fetchProfile = useCallback(async () => {
        try {
            const profile = await infoApi.getProfile();
            setProfile(profile.data);
            await Promise.all([fetchGithub(profile.data), fetchSolvedac(profile.data), fetchLanguages()]);
        } catch (e) {
            // console.error(e);
        }
    }, [fetchSolvedac, fetchGithub, fetchLanguages]);

    return {
        profile,
        solvedac,
        github,
        languages,
        fetchProfile,
        fetchLanguages
    };
}

export default useAppState;