import {useCallback, useState} from "react";
import {ForumResponse} from "@repository/forum/response/Forum.response";
import forumApi from "@repository/forum/api/forum.api";

const useFetchForum = (): {
    forums: ForumResponse[];
    fetchForums: () => Promise<void>;
    fetchNextForums: () => Promise<void>;
    updateForumLiked: (forumId: number) => void;
    findForumIndexById: (forumId: number) => number;
} => {

    const [forums, setForums] = useState<ForumResponse[]>([]);
    const [page, setPage] = useState(1);

    const fetchForums = useCallback(
        async () => {
            try {
                const {data: forums} = await forumApi.getForums(page, 15);
                setForums(forums ?? []);
            } catch (e) {
                console.error(e);
                setPage(1);
            }
        },
        [page]
    );

    const fetchNextForums = useCallback(
        async () => {
            const nextPage = forums.length / 15 + 1;
            try {
                const {data: forums} = await forumApi.getForums(nextPage, 15);
                setForums(forum => [...forum, ...forums ?? []]);
            } catch (e) {
                console.error(e);
                setPage(1);
            }
        },
        [forums]
    );

    const findForumIndexById = useCallback((forumId: number): number => {
        return forums.findIndex(item => item.community.communityId === forumId);
    }, [forums]);


    const updateForumLiked = useCallback((forumId: number) => {
        setForums(prevForums =>
            prevForums.map(forum =>
                forum.community.communityId === forumId ? {
                    community: {
                        ...forum.community,
                        liked: !forum.community.liked,
                        like: forum.community.like ? forum.community.like - 1 : forum.community.like + 1
                    },
                    recentComment: forum.recentComment
                } : forum
            )
        )
    }, []);

    return {
        forums,
        fetchForums,
        fetchNextForums,
        updateForumLiked,
        findForumIndexById
    };
};

export default useFetchForum;