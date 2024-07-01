import {useCallback} from "react";

const useLike = (): {
    usePatchLike: (forumId: string) => void;
} => {

    const usePatchLike = useCallback((forumId: string) => {
        
    }, []);

    return {
        usePatchLike,
    }
};

export default useLike;