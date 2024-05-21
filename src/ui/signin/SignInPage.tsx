import * as S from './SignInPage.style';
import GrowTextField from "../../designsystem/component/textfield/GrowTextField";
import {useState} from "react";
import {css} from "styled-components";
import GrowButton from "../../designsystem/component/button/button/GrowButton";
import {ButtonType} from "../../designsystem/component/button/type/ButtonType";

const SignInPage = () => {

    const [id, setId] = useState('');
    const [pw, setPw] = useState('');

    return (
        <S.Container>
            <S.FormContent>
                <S.LoginTitle>로그인</S.LoginTitle>
                <S.Form>
                    <GrowTextField customStyle={css`align-self: stretch`} text={id} hint={'도담도담 아이디'} onChange={setId}/>
                    <GrowTextField customStyle={css`align-self: stretch`} text={pw} hint={'비밀번호'} onChange={setPw}/>
                </S.Form>
                <GrowButton text={'도담도담 로그인'} onClick={() => {}} type={ButtonType.CTA} customStyle={css`align-self: stretch`}/>
            </S.FormContent>
        </S.Container>
    );
};

export default SignInPage;