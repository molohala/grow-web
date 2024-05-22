import * as S from "./ProfilePage.style";
import MainTemplate from "../template/MainTemplate";
import useTokenCheck from "../../hook/auth/useTokenCheck";

const ProfilePage = () => {

    useTokenCheck();
    return (
        <MainTemplate>
            <S.Container>

            </S.Container>
        </MainTemplate>
    );
};

export default ProfilePage;