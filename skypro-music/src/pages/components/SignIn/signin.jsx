import React, { useEffect } from 'react'
// import './signin.styles.js'
import SignInContent from './SignInContent'
import { GlobalStyle } from '../../../GlobalStyles'
// import { useLocation, useNavigate } from "react-router-dom";

import * as S from './signin.styles.js'

export function SignIn() {
    return (
        <>
            <GlobalStyle />
            <S.Wrapper>
                <S.ContainerEnter>
                    <SignInContent />
                </S.ContainerEnter>
            </S.Wrapper>
        </>
    )
}
