import * as S from '../App.styles'
import { useParams, useNavigate } from 'react-router-dom'
import { Categories } from '../components/Sidebar/Sidebar'

export function Category() {
    const { id } = useParams()
    const category = Categories[id]
    const navigate = useNavigate()
    return (
        <S.Container>
            <S.FavouritePage>
                <S.FavouriteText onClick={() => navigate('/')}>
                    CategoryPage {category.id}
                </S.FavouriteText>
            </S.FavouritePage>
        </S.Container>
    )
}
