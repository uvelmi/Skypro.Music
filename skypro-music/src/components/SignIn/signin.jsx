import React from 'react'
import './signin.styles.js'
import SignInContent from './components/signin'

import { GlobalStyle } from '../../GlobalStyles.js'
import * as S from './signin.styles.js'

function SignIn() {
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

export default SignIn
