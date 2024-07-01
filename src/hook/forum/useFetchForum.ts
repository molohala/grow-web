import {useCallback, useState} from "react";
import {ForumResponse} from "../../repository/forum/response/Forum.response";
import forumApi from "../../repository/forum/api/forum.api";

const useFetchForum = (): {
    forums: ForumResponse[];
    fetchForums: () => Promise<void>;
    fetchNextForums: () => Promise<void>;
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
        [forums, page]
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
        [forums, page]
    );

    return {
        forums,
        fetchForums,
        fetchNextForums
    };
};

export default useFetchForum;