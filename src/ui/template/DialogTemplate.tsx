import React, {useEffect, useRef} from 'react';
import styled from "styled-components";

import FlexLayout from "@designsystem/util/FlexLayout";

interface DialogTemplateProps {
    children: React.ReactNode;
    dismiss: () => void;
}

const DialogTemplate = (
    {
        children,
        dismiss
    }: DialogTemplateProps
) => {

    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        dialogRef.current?.showModal();
    }, []);

    return (
        <S.DialogContainer ref={dialogRef}>
            {children}
            <S.Backdrop onClick={() => {
                dialogRef.current?.close();
                dismiss();
            }}/>
        </S.DialogContainer>
    );
};

const S = {
    DialogContainer: styled.dialog`
        // style
        ${FlexLayout({flexDirection: 'column', alignItems: 'center'})};
        max-width: 100vw;
        width: 100vw;
        max-height: 100vh;
        height: 100vh;
        padding: 0 8px;

        // style
        border: none;
        outline: none;
        background: none;
    `,
    Backdrop: styled.div`
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        position: fixed;
        background: black;
        opacity: 0.5;
        z-index: 2;
    `,
    Content: styled.div`
        ${FlexLayout({})};
        z-index: 3;
    `
}

export default DialogTemplate;