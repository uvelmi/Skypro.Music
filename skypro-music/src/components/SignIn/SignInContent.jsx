import * as S from './signin.styles'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import React, { useState } from 'react'

function SignInContent() {
    const [user, setUser] = useState('')
    const navigate = useNavigate()
    const handleLogin = () => {
        Cookies.set('user', '1234')
        navigate('/')
    }
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
                    className="password"
                    type="password"
                    name="password"
                    placeholder="Пароль" onChange={(e) => setUser(e.target.value)}
                />
                <S.ModalBtnEnter>
								<S.ModalBtnEnterA onClick={() => handleLogin()}>
                        Войти
                    </S.ModalBtnEnterA>
                </S.ModalBtnEnter>
                <S.ModalBtnSignup>
                    <S.ModalBtnSignupA onClick={() => navigate('/register')}>
                        Зарегистрироваться
                    </S.ModalBtnSignupA>
                </S.ModalBtnSignup>
            </S.ModalFormLogin>
        </S.ModalBlock>
    )
}

export default SignInContent
