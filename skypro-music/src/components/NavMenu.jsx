import React, {useState} from "react";
const NavMenu = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	}
  return (
		<nav className="main__nav nav">
		<div className="nav__logo logo">
			<img className="logo__image" src="img/logo.png" alt="logo" />
		</div>

		<div className="nav__burger burger"onClick={toggleMenu}>
			<span className="burger__line"></span>
			<span className="burger__line"></span>
			<span className="burger__line"></span>
		</div>
		<div className="nav__menu menu"> {isOpen && (
			<ul className="menu__list">
				<li className="menu__item">
					<a href="#" className="menu__link">Главное</a>
				</li>
				<li className="menu__item">
					<a href="#" className="menu__link">Мой плейлист</a>
				</li>
				<li className="menu__item">
					<a href="../signin.html" className="menu__link">Войти</a>
				</li>
			</ul>
			 )}
		</div>
	</nav>
  );
}

export default NavMenu;