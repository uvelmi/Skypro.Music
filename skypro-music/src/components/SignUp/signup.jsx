import React from 'react'
import SignUpContent from './SignUpContent'

import { GlobalStyle } from '../../GlobalStyles'
import * as S from './signup.styles.js'

export function SignUp() {
    return (
        <>
            <GlobalStyle />
            <S.Wrapper>
                <S.ContainerSignup>
                    <SignUpContent />
                </S.ContainerSignup>
            </S.Wrapper>
        </>
    )
}
