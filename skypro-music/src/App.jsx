import * as S from './App.styles'
import React, { useState, useEffect } from 'react'
import { GlobalStyle } from './GlobalStyles'
import { AppRoutes } from './Routes'
import { NavBar } from './pages/components/nav-bar/NavBar'
import Cookies from 'js-cookie'
// import { useNavigate } from "react-router-dom";

function App() {
    const user = Cookies.get('user', '1234')

    return (
        <S.Wrapper>
            <NavBar />
            <AppRoutes user={user} />
            <GlobalStyle />
        </S.Wrapper>
    )
}

export default App
