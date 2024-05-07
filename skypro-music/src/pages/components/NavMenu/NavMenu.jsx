import { useState } from 'react'
import * as S from './NavMenu.styles'
// import { NavLink } from 'react-router-dom';
import { NavBar } from '../nav-bar/NavBar'


const NavMenu = () => {
// const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
    return (
        <S.MainNav>
            <S.NavLogo>
                <S.LogoImage src="img/logo.png" alt="logo" />
            </S.NavLogo>
            <S.NavBurger onClick={toggleMenu}>
                <S.BurgerLine></S.BurgerLine>
                <S.BurgerLine></S.BurgerLine>
                <S.BurgerLine></S.BurgerLine>
            </S.NavBurger>
            <S.NavMenu>
                {' '}
                {isOpen && (
                    <S.MenuList>
                        <S.MenuItem>
												<NavBar to="/" text="Главное" />
                        </S.MenuItem>
                        <S.MenuItem>
												<NavBar to="/favourites/" text="Мой плейлист" />
                        </S.MenuItem>
                        <S.MenuItem>
												<NavBar to="/login" text="Войти" />
                        </S.MenuItem>
                    </S.MenuList>
                )}
            </S.NavMenu>
        </S.MainNav>
    )
}

export default NavMenu
