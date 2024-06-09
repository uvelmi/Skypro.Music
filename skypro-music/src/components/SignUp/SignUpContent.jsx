import React from 'react'
import * as S from './signup.styles'
import { useNavigate, Link } from 'react-router-dom'
import { useState, useRef, useEffect, useContext } from 'react'
import { userRegister } from '../../api'
import { AuthContext } from '../../context/authContext'

export default function SignUpContent() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const [error, setError] = useState('')
    const [userData, setUserData] = useContext(AuthContext)
    const registerButtonRef = useRef(null)
    const navigate = useNavigate()

    const handleRegister = async ({ email, password }) => {
        if (!email) {
            setError('Не заполнена почта')
            return
        }
        if (!password) {
            setError('Не заполнен пароль')
            return
        }
        if (!repeatPassword) {
            setError('Повторите пароль')
            return
        }
        if (password !== repeatPassword) {
            setError('Пароли не совпадают')
            return
        }

        registerButtonRef.current.disabled = true
        const response = await userRegister({ email, password })

        if (response.status === 400) {
            setError('Ошибка с данными. Такой пользователь существует.')
            registerButtonRef.current.disabled = false
            return
        } else if (response.status === 500) {
            setError('Сервер не отвечает')
            registerButtonRef.current.disabled = false
            return
        }

        const data = await response.json()
        setUserData(data.username)
        localStorage.setItem('user', JSON.stringify(data.username))
        registerButtonRef.current.disabled = false
        navigate('/')
    }

    useEffect(() => {
        setError(null)
    }, [email, password, repeatPassword])

    return (
        <S.ModalBlock>
            <S.ModalFormLogin>
                <Link to="../">
                    <S.ModalLogo>
                        <S.ModalLogoImg
                            src="../img/logo_modal.png"
                            alt="logo"
                        />
                    </S.ModalLogo>
                </Link>
                <S.ModalInput
                    type="text"
                    name="login"
                    placeholder="Почта"
                    value={email}
                    onChange={(event) => {
                        setEmail(event.target.value)
                    }}
                />
                <S.ModalInput
                    type="password"
                    name="password"
                    placeholder="Пароль"
                    value={password}
                    onChange={(event) => {
                        setPassword(event.target.value)
                    }}
                />
                <S.ModalInput
                    type="password"
                    name="password"
                    placeholder="Повторите пароль"
                    value={repeatPassword}
                    onChange={(event) => {
                        setRepeatPassword(event.target.value)
                    }}
                />
                {error && <S.Error>{error}</S.Error>}
                <S.ModalBtnSignupEnt
                    ref={registerButtonRef}
                    onClick={() => {
                        handleRegister({ email, password })
                    }}
                >
                    <S.ModalBtnSignupEntA>
                        Зарегистрироваться
                    </S.ModalBtnSignupEntA>
                </S.ModalBtnSignupEnt>
            </S.ModalFormLogin>
        </S.ModalBlock>
    )
}
