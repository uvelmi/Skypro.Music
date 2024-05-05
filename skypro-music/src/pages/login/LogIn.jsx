import * as S from '../App.styles'
import { useNavigate } from 'react-router-dom';
import {SignInContent} from '../components/SignIn/SignInContent.jsx'
export const LoginPage = () => {
	const navigate = useNavigate();
	return (
		<S.Container>
			<S.FavouritePage>
			<S.FavouriteText onClick={() => navigate("/login")}>LoginPage</S.FavouriteText>
			<SignInContent />
			</S.FavouritePage>
			</S.Container>
	)
}