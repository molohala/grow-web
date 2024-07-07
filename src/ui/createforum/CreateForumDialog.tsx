import React, {useState} from 'react';
import {css} from "styled-components";

import DialogTemplate from "@ui/template/DialogTemplate";
import S from '@ui/createforum/CreateForumDialog.style';

import Spacer from "@designsystem/component/spacer/Spacer";
import GrowTextButton from "@designsystem/component/button/textbutton/GrowTextButton";
import {ButtonType} from "@designsystem/component/button/type/ButtonType";
import GrowTextArea from "@designsystem/component/textarea/GrowTextArea";

import forumApi from "@repository/forum/api/forum.api";

interface CreateForumProps {
    dismiss: () => void;
}

const CreateForumDialog = (
    {
        dismiss
    }: CreateForumProps
) => {

    const [content, setContent] = useState('');
    const [isFetchSubmit, setIsFetchSubmit] = useState(false);

    const handleSubmit = async () => {
        setIsFetchSubmit(true);
        if (isFetchSubmit) {
            return;
        }
        try {
            await forumApi.createForum({
                content: content
            });
            setContent('');
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
                    <S.Title>글쓰기</S.Title>
                    <Spacer/>
                    <GrowTextButton
                        text={'완료'}
                        type={ButtonType.Small}
                        onClick={handleSubmit}
                        isEnabled={content.length > 0}
                    />
                </S.TopBar>
                <GrowTextArea
                    hint={'내용을 적어주세요'}
                    text={content}
                    onChange={(text) => {
                        setContent(text);
                    }}
                    customStyle={css`
                        height: 300px;
                    `}/>
                <S.WarningText>* 부적절하거나 불쾌감을 줄 수 있는 컨텐츠는 제재를 받을 수 있습니다</S.WarningText>
            </S.Container>
        </DialogTemplate>
    );
};

export default CreateForumDialog;