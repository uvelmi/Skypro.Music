import * as S from '../App.styles'
import { useNavigate } from 'react-router-dom';
export const FavouritesPage = () => {
	const navigate = useNavigate();
	return (
		<S.Container>
			<S.FavouritePage>
			<S.FavouriteText onClick={() => navigate("/")}>FavouritesPage</S.FavouriteText>
			</S.FavouritePage>
			</S.Container>
	)
}