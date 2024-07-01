import * as S from "./ForumPage.style";
import MainTemplate from "../template/MainTemplate";
import GrowIcon, {IconType} from "../../designsystem/foundation/iconography/GrowIcon";
import {useTheme} from "styled-components";
import ForumCell from "./cell/ForumCell";
import useTokenCheck from "../../hook/auth/useTokenCheck";
import useForum from "../../hook/forum/useFetchForum";
import {useEffect} from "react";
import {ForumResponse} from "../../repository/forum/response/Forum.response";
import {pagingInterval} from "../../util/pagingConstant";

const ForumPage = () => {
    useTokenCheck();
    const {forums, fetchForums, fetchNextForums} = useForum();
    const theme = useTheme();

    useEffect(() => {
        fetchForums().then();
    }, []);

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
        <MainTemplate>
            <S.Container>
                <S.Content>
                    <S.WriteContainer>
                        <GrowIcon type={IconType.Write} tint={theme.textNormal}/>
                        글쓰기
                    </S.WriteContainer>
                    <S.ForumContent>
                        {forums.map(forum => (
                            <ForumCell forum={forum} onAppear={() => handleForumCellOnAppear(forum)}/>
                        ))}
                    </S.ForumContent>
                </S.Content>
            </S.Container>
        </MainTemplate>
    );
};

export default ForumPage;