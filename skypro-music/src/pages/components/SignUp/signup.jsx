import React from 'react'
import '../../signup.styles.js'
import SignUpContent from './components/signup'
import { GlobalStyle } from '../../GlobalStyles.js'

function SignUp() {
    return (
        <>
            <GlobalStyle />
            <StyledWrapper>
                <StyledContainerSignup>
                    <SignUpContent />
                </StyledContainerSignup>
            </StyledWrapper>
        </>
    )
}

export default SignUp
