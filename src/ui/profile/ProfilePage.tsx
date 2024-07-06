import S from "./ProfilePage.style";
import MainTemplate from "../template/MainTemplate";
import useTokenCheck from "../../hook/auth/useTokenCheck";
import {Column, Row} from "../../designsystem/util/StyledFlex";
import GrowAvatar, {AvatarType} from "../../designsystem/component/avatar/GrowAvatar";
import GrowIcon, {IconType} from "../../designsystem/foundation/iconography/GrowIcon";
import {useTheme} from "styled-components";
import GrowLanguage from "../../designsystem/component/language/GrowLanguage";
import useAppState from "../../hook/global/useAppState";
import {useContext} from "react";
import {AppStateContext} from "../../provider/appstate/AppStateContext";

const ProfilePage = () => {
    useTokenCheck();

    const theme = useTheme();
    const {profile} = useContext(AppStateContext);
    const tempLangs = [
        'Swift',
        'Python',
        'Rust',
        'C++',
        'C',
        'C++',
        'Go',
        'Roby',
        'JavaScript',
        'TypeScript',
        'Mojo',
        'Kotlin',
        'Java'
    ]

    return (
        <MainTemplate>
            <S.Container>
                <S.FirstContainer>
                    <Row $columnGap={12} $alignItems={'center'}>
                        <GrowAvatar type={AvatarType.ExtraLarge}/>
                        <Column rowGap={2}>
                            <S.Developer>{profile?.job} 개발자</S.Developer>
                            <S.ProfileName>{profile?.name}</S.ProfileName>
                        </Column>
                    </Row>
                    <Column rowGap={12}>
                        <Row $columnGap={4} $alignItems={'center'}>
                            <S.Subtitle>소개글</S.Subtitle>
                            <GrowIcon tint={theme.textAlt} type={IconType.Write}/>
                        </Row>
                        <S.Content>{profile?.bio}</S.Content>
                    </Column>
                    <Column rowGap={12}>
                        <S.Subtitle>사용 언어</S.Subtitle>
                        <S.LanguageContainer>
                            {tempLangs.map(lang => (
                                <GrowLanguage text={lang}/>
                            ))}
                        </S.LanguageContainer>
                    </Column>
                </S.FirstContainer>
                <S.SecondContainer>
                    <S.Subtitle>통계</S.Subtitle>
                    <Row>
                        <S.Subtitle>출시 준비중...</S.Subtitle>
                    </Row>
                </S.SecondContainer>
            </S.Container>
        </MainTemplate>
    );
};

export default ProfilePage;