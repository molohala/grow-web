import React, {useContext, useEffect, useState} from 'react';
import DialogTemplate from "../template/DialogTemplate";
import S from './PatchMyLanguagesDialog.style';
import Spacer from "../../designsystem/component/spacer/Spacer";
import GrowTextButton from "../../designsystem/component/button/textbutton/GrowTextButton";
import {ButtonType} from "../../designsystem/component/button/type/ButtonType";
import {AppStateContext} from "../../provider/appstate/AppStateContext";
import GrowRadioButton from "../../designsystem/component/button/radiobutton/GrowRadioButton";
import languageApi from "../../repository/language/api/language.api";
import LanguageResponse from "../../repository/language/response/Language.response";
import {IconType} from "../../designsystem/foundation/iconography/GrowIcon";

interface PatchMyLanguagesDialogProps {
    dismiss: () => void;
}

const PatchMyLanguagesDialog = (
    {
        dismiss
    }: PatchMyLanguagesDialogProps
) => {

    const [isFetchSubmit, setIsFetchSubmit] = useState(false);
    const {languages, fetchLanguages} = useContext(AppStateContext);
    const [myLanguages, setMyLanguages] = useState<LanguageResponse[] | null>(languages);
    const [allLanguages, setAllLanguages] = useState<LanguageResponse[] | null>(null);

    useEffect(() => {
        fetchAllLanguages().catch();
    }, []);

    const fetchAllLanguages = async () => {
        try {
            const languages = await languageApi.getAllLanguages();
            setAllLanguages(languages.data);
        } catch (e) {
            // console.error(e);
        }
    }

    const handleSubmit = async () => {
        setIsFetchSubmit(true);
        if (isFetchSubmit || !myLanguages) {
            return;
        }
        try {
            await languageApi.patchLanguage({
                langs: myLanguages.map(l => l.id),
            });
            await fetchLanguages();
            dismiss();
        } catch (e) {
            // console.error(e);
        } finally {
            setIsFetchSubmit(false);
        }
    };

    const handleLanguageClicked = (lang: LanguageResponse) => {
        if (myLanguages?.find(l => l.id === lang.id)) {
            const newMyLanguages = myLanguages.filter(language => language.id !== lang.id);
            setMyLanguages(newMyLanguages);
        } else {
            setMyLanguages([...myLanguages ?? [], lang]);
        }
    };

    return (
        <DialogTemplate dismiss={dismiss}>
            <S.Container>
                <S.TopBar>
                    <S.Title>사용 언어 설정</S.Title>
                    <Spacer/>
                    <GrowTextButton
                        text={'완료'}
                        type={ButtonType.Small}
                        onClick={handleSubmit}
                    />
                </S.TopBar>
                <S.LanguageContainer>
                    {allLanguages?.map(lang => (
                        <GrowRadioButton
                            key={lang.id}
                            text={lang.name}
                            onClick={() => handleLanguageClicked(lang)}
                            isSelected={myLanguages?.find(l => l.id === lang.id) !== undefined}
                            selectedIcon={IconType.Check}
                            unselectedIcon={IconType.AddLine}
                        />)
                    )}
                </S.LanguageContainer>
            </S.Container>
        </DialogTemplate>
    );
};

export default PatchMyLanguagesDialog;