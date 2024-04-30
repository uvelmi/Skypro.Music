import  {useState} from "react";
import * as S from './NavMenu.styles'


const NavMenu = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
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
		<S.NavMenu> {isOpen && (
			<S.MenuList>
				<S.MenuItem>
					<S.MenuLink href="#">Главное</S.MenuLink>
				</S.MenuItem>
				<S.MenuItem>
					<S.MenuLink href="#">Мой плейлист</S.MenuLink>
				</S.MenuItem>
				<S.MenuItem>
					<S.MenuLink href="../signin.html">Войти</S.MenuLink>
				</S.MenuItem>
			</S.MenuList>
			 )}
		</S.NavMenu>
	</S.MainNav>
  );
}

export default NavMenu;