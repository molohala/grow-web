import {useEffect, useState} from "react";
import {useTheme} from "styled-components";

import {ForumResponse} from "@repository/forum/response/Forum.response";

import pagingInterval from "@util/pagingConstant";

import GrowIcon, {IconType} from "@designsystem/foundation/iconography/GrowIcon";
import GrowLoader from "@designsystem/component/loader/GrowLoader";

import MainTemplate from "@ui/template/MainTemplate";
import CreateForumDialog from "@ui/createforum/CreateForumDialog";
import ForumDetailDialog from "@ui/forumdetail/ForumDetailDialog";

import useTokenCheck from "@hook/auth/useTokenCheck";
import useForum from "@hook/forum/useFetchForum";
import useLike from "@hook/like/useLike";

import * as S from "./ForumPage.style";
import ForumCell from "./cell/ForumCell";

const ForumPage = () => {
    useTokenCheck();
    const {
        forums,
        fetchForums,
        fetchNextForums,
        updateForumLiked,
        findForumIndexById
    } = useForum();
    const theme = useTheme();
    const {patchLike} = useLike();
    const [selectedForumIdx, setSelectedForumIdx] = useState<number | null>(null);
    const selectedForum = selectedForumIdx === null ? null : forums[selectedForumIdx];
    const [showCreateForumDialog, setShowCreateForumDialog] = useState(false);

    useEffect(() => {
        fetchForums().then();
    }, [fetchForums]);

    const handleForumCellClicked = (forumId: number) => {
        const index = findForumIndexById(forumId);
        setSelectedForumIdx(index);
    }

    const handleForumCellOnAppear = (forum: ForumResponse) => {
        const index = findForumIndexById(forum.community.communityId);

        if (index === -1) {
            return;
        }
        if (index % pagingInterval === (pagingInterval - 1) && Math.floor(index / pagingInterval) === Math.floor((forums.length - 1) / pagingInterval)) {
            fetchNextForums().then();
        }
    };

    const handleLikeClicked = async (forum: ForumResponse) => {
        const result = await patchLike(forum.community.communityId);
        if (result) {
            updateForumLiked(forum.community.communityId);
        }
    }

    return (
        <>
            <MainTemplate>
                <S.Container>
                    <S.Content>
                        <S.WriteContainer onClick={() => {
                            setShowCreateForumDialog(true);
                        }}>
                            <GrowIcon type={IconType.Write} tint={theme.textNormal}/>
                            글쓰기
                        </S.WriteContainer>
                        {!forums.length && <GrowLoader/>}
                        <S.ForumContent>
                            {forums.map(forum => (
                                <ForumCell
                                    key={forum.community.communityId}
                                    forum={forum}
                                    onClick={() => handleForumCellClicked(forum.community.communityId)}
                                    onAppear={() => handleForumCellOnAppear(forum)}
                                    onLikeClicked={() => handleLikeClicked(forum)}
                                />
                            ))}
                            <div style={{height: '32px'}}></div>
                        </S.ForumContent>
                    </S.Content>
                </S.Container>
            </MainTemplate>
            {selectedForum && <ForumDetailDialog
                dismiss={() => {
                    setSelectedForumIdx(null);
                }}
                forum={selectedForum}
                updateForumLiked={() => {
                    handleLikeClicked(selectedForum).then();
                }}
            />}
            {showCreateForumDialog && <CreateForumDialog dismiss={() => {
                setShowCreateForumDialog(false);
                fetchForums().then();
            }}/>}
        </>
    );
};

export default ForumPage;