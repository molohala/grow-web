import * as S from "@ui/home/HomePage.style";
import MainTemplate from "@ui/template/MainTemplate";

import useTokenCheck from "@hook/auth/useTokenCheck";

const HomePage = () => {

    useTokenCheck();

    return (
        <MainTemplate>
            <S.Container>

            </S.Container>
        </MainTemplate>
    );
};

export default HomePage;