import React from 'react';
import * as S from './signin.styles'


function SignInContent() {
  return (
 <S.ModalBlock>
          <S.ModalFormLogin action="#">
            <a href="../">
              <S.ModalLogo>
                <img src="../img/logo_modal.png" alt="logo" />
              </S.ModalLogo>
            </a>
            <S.Login
              type="text"
              name="login"
              placeholder="Почта"
            />
            <S.ModalInput
              class="password"
              type="password"
              name="password"
              placeholder="Пароль"
            />
            <S.ModalBtnEnter>
              <S.ModalBtnEnterA href="../index.html">Войти</S.ModalBtnEnterA>
            </S.ModalBtnEnter>
            <S.ModalBtnSignup>
              <S.ModalBtnSignupA href="signup.html">Зарегистрироваться</S.ModalBtnSignupA>
            </S.ModalBtnSignup>
          </S.ModalFormLogin>
        </S.ModalBlock>
				);
			}
			
			export default SignInContent;