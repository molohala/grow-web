import * as S from "./ForumPage.style";
import MainTemplate from "../template/MainTemplate";
import GrowIcon, {IconType} from "../../designsystem/foundation/iconography/GrowIcon";
import {useTheme} from "styled-components";
import ForumCell from "./cell/ForumCell";
import useTokenCheck from "../../hook/auth/useTokenCheck";
import useForum from "../../hook/forum/useFetchForum";
import {useEffect} from "react";

const ForumPage = () => {
    useTokenCheck();
    const {forums, fetchForums, fetchNextForums} = useForum();
    const theme = useTheme();

    useEffect(() => {
        fetchForums().then();
    }, []);

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
                            <ForumCell forum={forum}/>
                        ))}
                    </S.ForumContent>
                </S.Content>
            </S.Container>
        </MainTemplate>
    );
};

export default ForumPage;