import {useTheme} from "styled-components";
import {useContext, useEffect, useState} from "react";

import useTokenCheck from "@hook/auth/useTokenCheck";

import {Column, FlexWrapper, Row} from "@designsystem/util/StyledFlex";
import GrowAvatar, {AvatarType} from "@designsystem/component/avatar/GrowAvatar";
import GrowIcon, {IconType} from "@designsystem/foundation/iconography/GrowIcon";
import GrowLanguage from "@designsystem/component/language/GrowLanguage";

import {AppStateContext} from "@provider/appstate/AppStateContext";

import MainTemplate from "@ui/template/MainTemplate";
import PatchMyBioDialog from "@ui/patchmybio/PatchMyBioDialog";
import PatchMyLanguagesDialog from "@ui/patchmylanguages/PatchMyLanguagesDialog";
import S from "@ui/profile/ProfilePage.style";

const ProfilePage = () => {
    useTokenCheck();

    const theme = useTheme();
    const {profile, languages, fetchLanguages} = useContext(AppStateContext);
    const [showPatchMyProfileDialog, setShowPatchMyProfileDialog] = useState(false);
    const [showPatchLanguagesDialog, setShowPatchLanguagesDialog] = useState(false);

    useEffect(() => {
        fetchLanguages().catch();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handlePatchBioIconClicked = () => {
        setShowPatchMyProfileDialog(true);
    };

    const handlePatchLanguagesClicked = () => {
        setShowPatchLanguagesDialog(true);
    }

    return (
        <MainTemplate>
            {showPatchMyProfileDialog && <PatchMyBioDialog dismiss={() => setShowPatchMyProfileDialog(false)}/>}
            {showPatchLanguagesDialog && <PatchMyLanguagesDialog dismiss={() => setShowPatchLanguagesDialog(false)}/>}
            <S.Container>
                <S.FirstContainer>
                    <Row $columnGap={12} $alignItems={'center'}>
                        <GrowAvatar type={AvatarType.ExtraLarge}/>
                        <Column $rowGap={2}>
                            <S.Developer>{profile?.job} 개발자</S.Developer>
                            <S.ProfileName>{profile?.name}</S.ProfileName>
                        </Column>
                    </Row>
                    <Column $rowGap={12}>
                        <Row $columnGap={4} $alignItems={'center'}>
                            <S.Subtitle>소개글</S.Subtitle>
                            <FlexWrapper onClick={handlePatchBioIconClicked}>
                                <GrowIcon tint={theme.textAlt} type={IconType.Write}/>
                            </FlexWrapper>
                        </Row>
                        <S.Content>{profile?.bio}</S.Content>
                    </Column>
                    <Column $rowGap={12}>
                        <Row $columnGap={4} $alignItems={'center'}>
                            <S.Subtitle>사용 언어</S.Subtitle>
                            <FlexWrapper onClick={handlePatchLanguagesClicked}>
                                <GrowIcon tint={theme.textAlt} type={IconType.Write}/>
                            </FlexWrapper>
                        </Row>
                        <S.LanguageContainer>
                            {languages?.map(lang => (
                                <GrowLanguage key={lang.id} text={lang.name}/>
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