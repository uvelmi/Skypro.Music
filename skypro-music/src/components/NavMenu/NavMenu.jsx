import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import * as S from './NavMenu.styles'
import { NavBar } from '../nav-bar/NavBar'

const NavMenu = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

		const navigate = useNavigate()
		const onClick = () => {
			const user = localStorage.getItem('user')
			if(user){
				localStorage.removeItem('user')
			}
			navigate('/login')
		}
    return (
        <S.MainNav>
            <S.NavLogo>
                <S.LogoImage src="img/logo.png" alt="logo" onClick={() => navigate('/')}/>
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
                        <S.MenuItem onClick={onClick}>{localStorage.getItem('user') ? 'Выйти' : 'Войти'}
                            {/* <NavBar to="/login" text="Выйти" /> */}
                        </S.MenuItem>
                    </S.MenuList>
                )}
            </S.NavMenu>
        </S.MainNav>
    )
}

export default NavMenu
