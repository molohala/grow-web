import * as S from "./ForumPage.style";
import MainTemplate from "../template/MainTemplate";
import GrowIcon, {IconType} from "../../designsystem/foundation/iconography/GrowIcon";
import {useTheme} from "styled-components";
import ForumCell from "./cell/ForumCell";
import useTokenCheck from "../../hook/auth/useTokenCheck";
import useForum from "../../hook/forum/useFetchForum";
import {useEffect, useState} from "react";
import {ForumResponse} from "../../repository/forum/response/Forum.response";
import {pagingInterval} from "../../util/pagingConstant";
import GrowLoader from "../../designsystem/component/loader/GrowLoader";
import ForumDetailDialog from "./forumdetail/ForumDetailDialog";

const ForumPage = () => {
    useTokenCheck();
    const {forums, fetchForums, fetchNextForums} = useForum();
    const theme = useTheme();
    const [selectedForum, setSelectedForum] = useState<ForumResponse | null>(null);

    useEffect(() => {
        fetchForums().then();
    }, []);

    const handleForumCellClicked = (forum: ForumResponse) => {
        setSelectedForum(forum);
    }

    const handleForumCellOnAppear = (forum: ForumResponse) => {
        const index = forums.findIndex(item => item.community.communityId === forum.community.communityId);

        if (index === -1) {
            return;
        }
        if (index % pagingInterval === (pagingInterval - 1) && Math.floor(index / pagingInterval) === Math.floor((forums.length - 1) / pagingInterval)) {
            fetchNextForums().then();
        }
    };

    return (
        <>
            <MainTemplate>
                <S.Container>
                    <S.Content>
                        <S.WriteContainer>
                            <GrowIcon type={IconType.Write} tint={theme.textNormal}/>
                            글쓰기
                        </S.WriteContainer>
                        {!forums.length && <GrowLoader/>}
                        <S.ForumContent>
                            {forums.map(forum => (
                                <ForumCell
                                    forum={forum}
                                    onClick={() => handleForumCellClicked(forum)}
                                    onAppear={() => handleForumCellOnAppear(forum)}
                                />
                            ))}
                            <div style={{height: '32px'}}></div>
                        </S.ForumContent>
                    </S.Content>
                </S.Container>
            </MainTemplate>
            {selectedForum && <ForumDetailDialog
                dismiss={() => {
                    setSelectedForum(null);
                }}
                forum={selectedForum!}
            />}
        </>
    );
};

export default ForumPage;