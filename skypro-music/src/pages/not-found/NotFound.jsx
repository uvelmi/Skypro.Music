import * as S from '../App.styles'
import { useNavigate } from 'react-router-dom'

export const NotFound = () => {
    const navigate = useNavigate()
    return (
        <S.Container>
            <S.FavouritePage>
                <S.FavouriteText onClick={() => navigate('/')}>
                    Page was not found :c
                </S.FavouriteText>
								<S.HomeButton onClick={() => navigate('/')}>
                   Перейти на главную страницу
                </S.HomeButton>
            </S.FavouritePage>
        </S.Container>
    )
}
