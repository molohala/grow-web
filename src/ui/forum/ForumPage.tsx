import * as S from "./ForumPage.style";
import MainTemplate from "../template/MainTemplate";
import GrowIcon, {IconType} from "../../designsystem/foundation/iconography/GrowIcon";
import {useTheme} from "styled-components";
import ForumCell from "./cell/ForumCell";

const ForumPage = () => {

    const theme = useTheme();

    return (
        <MainTemplate>
            <S.Container>
                <S.Content>
                    <S.WriteContainer>
                        <GrowIcon type={IconType.Write} tint={theme.textNormal}/>
                        글쓰기
                    </S.WriteContainer>
                    <S.ForumContent>
                        {[1, 2, 3].map(e => (
                            <ForumCell/>
                        ))}
                    </S.ForumContent>
                </S.Content>
            </S.Container>
        </MainTemplate>
    );
};

export default ForumPage;