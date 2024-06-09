import React, { useEffect, useState, useContext } from 'react'
import AuthPage from './AuthPage'
import { GlobalStyle } from '../../GlobalStyles'
import * as S from './AuthPage.styles.js'

export function SignIn() {
    return (
        <>
            <GlobalStyle />
            <S.Wrapper>
                <S.ContainerEnter>
                    <AuthPage />
                </S.ContainerEnter>
            </S.Wrapper>
        </>
    )
}
