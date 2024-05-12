import * as S from './NavBar.styles.js'

export const NavBar = ({ to, text }) => {
    return <S.NavBarLink to={to}>{text}</S.NavBarLink>
}
