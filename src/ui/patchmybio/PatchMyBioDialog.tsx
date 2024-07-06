import React, {useContext, useState} from 'react';
import DialogTemplate from "../template/DialogTemplate";
import S from './PatchMyBioDialog.style';
import Spacer from "../../designsystem/component/spacer/Spacer";
import GrowTextButton from "../../designsystem/component/button/textbutton/GrowTextButton";
import {ButtonType} from "../../designsystem/component/button/type/ButtonType";
import GrowTextArea from "../../designsystem/component/textarea/GrowTextArea";
import {css} from "styled-components";
import forumApi from "../../repository/forum/api/forum.api";
import infoApi from "../../repository/info/api/info.api";
import {AppStateContext} from "../../provider/appstate/AppStateContext";

interface CreateForumProps {
    dismiss: () => void;
}

const PatchMyBioDialog = (
    {
        dismiss
    }: CreateForumProps
) => {
    const {profile, fetchProfile} = useContext(AppStateContext);
    const [content, setContent] = useState(profile?.bio ?? '');
    const [isFetchSubmit, setIsFetchSubmit] = useState(false);

    const handleSubmit = async () => {
        setIsFetchSubmit(true);
        if (isFetchSubmit) {
            return;
        }
        try {
            await infoApi.patchMyProfile({
                bio: content,
                job: profile?.job ?? ''
            });
            setContent('');
            fetchProfile().catch();
            dismiss();
        } catch (e) {
            // console.error(e);
        } finally {
            setIsFetchSubmit(false);
        }
    };

    return (
        <DialogTemplate dismiss={dismiss}>
            <S.Container>
                <S.TopBar>
                    <S.Title>프로필 설정</S.Title>
                    <Spacer/>
                    <GrowTextButton
                        text={'완료'}
                        type={ButtonType.Small}
                        onClick={handleSubmit}
                        isEnabled={content.length > 0}
                    />
                </S.TopBar>
                <GrowTextArea
                    hint={'소개글을 적어주세요'}
                    text={content}
                    onChange={(text) => {
                        setContent(text);
                    }}
                    customStyle={css`
                        height: 100px;
                    `}/>
            </S.Container>
        </DialogTemplate>
    );
};

export default PatchMyBioDialog;