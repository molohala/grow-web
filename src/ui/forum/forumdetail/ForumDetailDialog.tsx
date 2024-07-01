import React, {useEffect, useRef} from 'react';
import {ForumResponse} from "../../../repository/forum/response/Forum.response";
import * as S from "./ForumDetailDialog.style";


interface ForumDetailDialogProps {
    forum: ForumResponse | null;
    dismiss: () => void;
}

const ForumDetailDialog = ({
    forum,
    dismiss
} : ForumDetailDialogProps) => {

    const modalRef = useRef<HTMLDialogElement>(null);
    useEffect(() => {
        modalRef.current?.showModal();
    }, []);

    const handleBackgroundClicked = () => {
        dismiss();
    }

    return (
        <S.DialogContainer ref={modalRef}>
            <S.Container>
                asasdasd
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>asdasd<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>asdasd<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>asdasd<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>asdasd<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                d
                asd
                as
                das
                d
                asd
                d
            </S.Container>
            <S.Backdrop onClick={handleBackgroundClicked}/>
        </S.DialogContainer>
    );
};

export default ForumDetailDialog;