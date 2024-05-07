import React from 'react'
import * as S from './signup.styles'
import { useNavigate } from 'react-router-dom';

function SignUpContent() {
	const navigate = useNavigate();
    return (
        <S.ModalBlock>
            <S.ModalFormLogin>
                <a href="../">
                    <S.ModalLogo>
                        <S.ModalLogoImg
                            src="../img/logo_modal.png"
                            alt="logo"
                        />
                    </S.ModalLogo>
                </a>
                <S.ModalInput type="text" name="login" placeholder="Почта" />
                <S.ModalInput
                    type="password"
                    name="password"
                    placeholder="Пароль"
                />
                <S.ModalInput
                    type="password"
                    name="password"
                    placeholder="Повторите пароль"
                />
                <S.ModalBtnSignupEnt>
                    <S.ModalBtnSignupEntA onClick={() => navigate("/")}>
                        Зарегистрироваться
                    </S.ModalBtnSignupEntA>
                </S.ModalBtnSignupEnt>
            </S.ModalFormLogin>
        </S.ModalBlock>
    )
}

export default SignUpContent
