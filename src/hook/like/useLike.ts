import {useCallback} from "react";
import likeApi from "../../repository/like/api/like.api";

const useLike = (): {
    patchLike: (forumId: number) => Promise<boolean>;
} => {
    const patchLike = useCallback(async (forumId: number) => {
        try {
            await likeApi.patchLike(forumId);
            return true;
        } catch {
            return false;
        }
    }, []);

    return {
        patchLike,
    }
};

export default useLike;