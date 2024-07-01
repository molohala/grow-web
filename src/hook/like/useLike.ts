import {useCallback} from "react";
import likeApi from "../../repository/like/api/like.api";

const useLike = (): {
    usePatchLike: (forumId: number) => Promise<boolean>;
} => {
    const usePatchLike = useCallback(async (forumId: number) => {
        try {
            await likeApi.patchLike(forumId);
            return true;
        } catch {
            return false;
        }
    }, []);

    return {
        usePatchLike,
    }
};

export default useLike;