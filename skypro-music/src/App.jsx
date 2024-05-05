
import * as S from './App.styles'
import React, { useState, useEffect } from 'react'
import { GlobalStyle } from './GlobalStyles'
import { AppRoutes } from './Routes'


function App() {
    return (
        <S.Wrapper>
            <AppRoutes />
            <GlobalStyle />
        </S.Wrapper>
    )
}

export default App
