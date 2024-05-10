import { styled } from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
    min-height: 100%;
    overflow: hidden;
    background-color: #383838;
`
export const Container = styled.div`
    max-width: 1920px;
    height: 100vh;
    margin: 0 auto;
    position: relative;
    background-color: #181818;
`
export const Main = styled.main`
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
`
export const FavouritePage = styled.div`
    margin: 0 auto;
`

export const FavouriteText = styled.h1`
    margin: 0 auto;
    padding-top: 400px;
    text-align: center;
    font-size: 70px;
    cursor: pointer;
`

export const Button = styled.button`
    margin: 0 auto;
    padding-top: 400px;
    text-align: center;
    font-size: 70px;
`
