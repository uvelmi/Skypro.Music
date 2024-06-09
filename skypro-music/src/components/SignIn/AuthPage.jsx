import { Link, useNavigate } from 'react-router-dom'
import * as S from './AuthPage.styles'
import { useEffect, useState, useContext, useRef } from 'react'
import { userLogin, getToken } from '../../api'
import { AuthContext } from '../../context/authContext'

export default function AuthPage({ isLoginMode = true }) {
    const [error, setError] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const [userData, setUserData] = useContext(AuthContext)
    const loginButtonRef = useRef(null)
    const navigate = useNavigate()

    const handleLogin = async ({ email, password }) => {
        if (!email) {
            setError('Не заполнена почта')
            return
        }
        if (!password) {
            setError('Не заполнен пароль')
            return
        }
        loginButtonRef.current.disabled = true
        const response = await userLogin({ email, password })

        if (response.status === 400) {
            setError('Неверный логин или пароль')
            loginButtonRef.current.disabled = false
            return
        } else if (response.status === 401) {
            setError('Не существует пользователя с такими данными')
            loginButtonRef.current.disabled = false
            return
        } else if (response.status === 500) {
            setError('Сервер не отвечает, попробуйте позже')
            loginButtonRef.current.disabled = false
            return
        }
        const data = await response.json()
        setUserData(data.username)
        localStorage.setItem('user', JSON.stringify(data.username))
        loginButtonRef.current.disabled = false
        navigate('/')
    }

    // Сбрасываем ошибку если пользователь меняет данные на форме или меняется режим формы
    useEffect(() => {
        setError(null)
    }, [email, password, repeatPassword])

    return (
        <S.PageContainer>
            <S.ModalForm>
                <Link to="../">
                    <S.ModalLogo>
                        <S.ModalLogoImage
                            src="/img/logo_modal.png"
                            alt="logo"
                        />
                    </S.ModalLogo>
                </Link>
                <S.Inputs>
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
                </S.Inputs>
                {error && <S.Error>{error}</S.Error>}
                <S.Buttons>
                    <S.PrimaryButton
                        ref={loginButtonRef}
                        onClick={() => {
                            handleLogin({ email, password })
                        }}
                    >
                        Войти
                    </S.PrimaryButton>
                    <Link to="/register">
                        <S.SecondaryButton>
                            Зарегистрироваться
                        </S.SecondaryButton>
                    </Link>
                </S.Buttons>
            </S.ModalForm>
        </S.PageContainer>
    )
}
