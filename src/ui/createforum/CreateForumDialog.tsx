import React from 'react';
import DialogTemplate from "../template/DialogTemplate";
import S from './CreateForumDialog.style';
import Spacer from "../../designsystem/component/spacer/Spacer";
import GrowTextButton from "../../designsystem/component/button/textbutton/GrowTextButton";
import {ButtonType} from "../../designsystem/component/button/type/ButtonType";
import GrowTextField from "../../designsystem/component/textfield/GrowTextField";

interface CreateForumProps {
    dismiss: () => void;
}

const CreateForumDialog = (
    {
        dismiss
    }: CreateForumProps
) => {

    const handleSubmit = async () => {

    };

    return (
        <DialogTemplate dismiss={dismiss}>
            <S.Container>
                <S.TopBar>
                    <S.Title>글쓰기</S.Title>
                    <Spacer/>
                    <GrowTextButton text={'완료'} type={ButtonType.Small} onClick={handleSubmit}/>
                </S.TopBar>
                <GrowTextField hint={'내용을 적어주세요'} text={''} onChange={() => {}}/>
                <S.WarningText>* 부적절하거나 불쾌감을 줄 수 있는 컨텐츠는 제재를 받을 수 있습니다</S.WarningText>
            </S.Container>
        </DialogTemplate>
    );
};

export default CreateForumDialog;