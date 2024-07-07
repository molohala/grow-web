import {css} from "styled-components";

import useSignIn from "@hook/auth/useSignIn";
import useTokenCheck from "@hook/auth/useTokenCheck";

import GrowTextField from "@designsystem/component/textfield/GrowTextField";
import GrowButton from "@designsystem/component/button/button/GrowButton";
import {ButtonType} from "@designsystem/component/button/type/ButtonType";

import * as S from './SignInPage.style';

const SignInPage = () => {

    useTokenCheck();
    const {signIn, handleId, handlePw, submitSignIn} = useSignIn();

    return (
        <S.Container>
            <S.FormContent>
                <S.LoginTitle>로그인</S.LoginTitle>
                <S.Form>
                    <GrowTextField customStyle={css`align-self: stretch`} text={signIn.id} hint={'도담도담 아이디'} onChange={handleId}/>
                    <GrowTextField customStyle={css`align-self: stretch`} text={signIn.pw} hint={'비밀번호'} onChange={handlePw} isSecured={true}/>
                </S.Form>
                <GrowButton text={'도담도담 로그인'} onClick={submitSignIn} type={ButtonType.CTA} customStyle={css`align-self: stretch`}/>
            </S.FormContent>
        </S.Container>
    );
};

export default SignInPage;