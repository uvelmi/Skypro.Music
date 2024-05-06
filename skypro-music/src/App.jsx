import * as S from './App.styles'
import React, { useState, useEffect } from 'react'
import { GlobalStyle } from './GlobalStyles'
import { AppRoutes } from './Routes'
import { NavBar } from './pages/components/nav-bar/NavBar'
import Cookies from 'js-cookie'
function App() {
	const userToken = Cookies.get('token') // => '1234'
    return (
        <S.Wrapper>
            <NavBar />
            <AppRoutes user={userToken} />
            <GlobalStyle />
        </S.Wrapper>
    )
}

export default App
