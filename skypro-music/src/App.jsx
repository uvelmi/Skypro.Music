import * as S from './App.styles'
import React, { useState, useEffect } from 'react'
import { GlobalStyle } from './GlobalStyles'
import { AppRoutes } from './Routes'

import Cookies from 'js-cookie'


function App() {
    const user = Cookies.get('user', '1234')

    return (
        <S.Wrapper>
            <AppRoutes user={user} />
            <GlobalStyle />
        </S.Wrapper>
    )
}

export default App
