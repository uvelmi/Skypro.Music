import React from 'react'
import * as S from './signin.styles'
import { useNavigate } from 'react-router-dom';

function SignInContent() {
	const navigate = useNavigate();
    return (
        <S.ModalBlock>
            <S.ModalFormLogin action="#">
                <a href="../">
                    <S.ModalLogo>
                        <img src="../img/logo_modal.png" alt="logo" />
                    </S.ModalLogo>
                </a>
                <S.Login type="text" name="login" placeholder="Почта" />
                <S.ModalInput
                    class="password"
                    type="password"
                    name="password"
                    placeholder="Пароль"
                />
                <S.ModalBtnEnter>
                    <S.ModalBtnEnterA onClick={() => navigate("/")}>
                        Войти
                    </S.ModalBtnEnterA>
                </S.ModalBtnEnter>
                <S.ModalBtnSignup>
                    <S.ModalBtnSignupA onClick={() => navigate("/register")}>
                        Зарегистрироваться
                    </S.ModalBtnSignupA>
                </S.ModalBtnSignup>
            </S.ModalFormLogin>
        </S.ModalBlock>
    )
}

export default SignInContent
