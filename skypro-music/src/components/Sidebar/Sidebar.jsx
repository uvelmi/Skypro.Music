import * as S from './Sidebar.styles'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/authContext'
import { useContext } from 'react'

export const Categories = [
    {
        id: 1,
        imgUrl: 'img/playlist01.png',
        alt: "day's playlist",
    },
    {
        id: 2,
        imgUrl: 'img/playlist02.png',
        alt: 'dancing hits',
    },
    {
        id: 3,
        imgUrl: 'img/playlist03.png',
        alt: 'hindy energy',
    },
]
function SideBar({ isLoading, setIsLoading }) {
    const navigate = useNavigate()
    const handleRegister = () => {
        localStorage.removeItem('user')
        navigate('/login')
    }
    const [userData] = useContext(AuthContext)
    return (
        <S.MainSidebar>
            <S.SidebarPersonal>
                <S.SidebarPersonalName>
                    {userData ?? 'Не авторизован'}
                </S.SidebarPersonalName>
                <S.SidebarIcon onClick={handleRegister}>
                    <svg alt="logout">
                        <use xlinkHref="img/icon/sprite.svg#logout"></use>
                    </svg>
                </S.SidebarIcon>
            </S.SidebarPersonal>
            <S.SidebarBlock>
                <S.SidebarList>
                    {Categories.map((category) => (
                        <S.SidebarItem key={category.id}>
                            {isLoading ? (
                                <Skeleton
                                    width={250}
                                    height={150}
                                    baseColor="#202020"
                                    highlightColor="#444"
                                />
                            ) : (
                                <S.SidebarLink
                                    onClick={() =>
                                        navigate(`/category/${category.id}`)
                                    }
                                >
                                    <S.SidebarImg
                                        src={category.imgUrl}
                                        alt={category.alt}
                                    />
                                </S.SidebarLink>
                            )}
                        </S.SidebarItem>
                    ))}
                </S.SidebarList>
            </S.SidebarBlock>
        </S.MainSidebar>
    )
}

export default SideBar
