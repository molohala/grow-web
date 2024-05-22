import * as S from "./HomePage.style";
import MainTemplate from "../template/MainTemplate";
import useTokenCheck from "../../hook/auth/useTokenCheck";

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