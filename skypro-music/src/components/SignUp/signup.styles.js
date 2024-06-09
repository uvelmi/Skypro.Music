import { styled } from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
    min-height: 100%;
    overflow: hidden;
`
export const ContainerSignup = styled.div`
    max-width: 100%;
    height: 100vh;
    margin: 0 auto;
    position: relative;
    background-color: rgba(0, 0, 0, 0.85);
`
export const ModalBlock = styled.div`
    position: absolute;
    z-index: 2;
    left: calc(50% - (366px / 2));
    top: calc(50% - (439px / 2));
    opacity: 1;
`
export const ModalFormLogin = styled.form`
    width: 366px;
    background-color: #ffffff;
    border-radius: 12px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 43px 44px 47px 40px;
    input:first-child {
        margin-bottom: 30px;
    }
`
export const ModalLogo = styled.div`
    width: 140px;
    height: 21px;
    margin-bottom: 34px;
    background-color: transparent;
`
export const ModalLogoImg = styled.img`
    width: 140px;
    height: auto;
`
export const ModalInput = styled.input`
    width: 100%;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid #d0cece;
    padding: 8px 1px;
    margin-right: 3px;
    margin-bottom: 30px;
    &::-webkit-input-placeholder {
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
        letter-spacing: -0.05px;
        color: #d0cece;
    }
    &:-ms-input-placeholder {
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
        letter-spacing: -0.05px;
        color: #d0cece;
    }
    &::-ms-input-placeholder {
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
        letter-spacing: -0.05px;
        color: #d0cece;
    }
    &::placeholder {
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
        letter-spacing: -0.05px;
        color: #d0cece;
    }
`

export const ModalBtnSignupEnt = styled.button`
    width: 278px;
    height: 62px;
    background-color: #580ea2;
    border-radius: 6px;
    margin-left: 4px;
    border: none;
    margin-top: 30px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;

    justify-content: center;
    &:active {
        background-color: #271a58;
    }
    &:hover {
        background-color: #3f007d;
    }
`

export const ModalBtnSignupEntA = styled.a`
    width: 100%;
    height: 100%;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    color: #ffffff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    &:hover {
        background-color: #3f007d;
    }
    &:active {
        background-color: #271a58;
    }
`
export const ModalButtonRegister = styled(ModalBtnSignupEnt)`
    width: 278px;
    height: 52px;
    background-color: transparent;
    border: 1px solid #d0cece;
    border-radius: 6px;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    color: #000000;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
`
export const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 60px;
    width: 100%;
`
const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;

    width: 278px;
    height: 52px;
    border-radius: 6px;
    border: none;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;

    &:disabled {
        background-color: #303030;
    }
`
export const PrimaryButton = styled(Button)`
    & a {
        width: 100%;
        height: 100%;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
        letter-spacing: -0.05px;
        color: #000000;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
    }
    &:active {
        background-color: #d9d9d9;
    }
    &:hover {
        background-color: #f4f5f6;
    }
`

export const Error = styled.div`
    color: coral;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    margin-top: 20px;
    text-align: left;
`
