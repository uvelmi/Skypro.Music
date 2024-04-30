import PlayList from '../Playlist/Playlist'
import * as S from './Sidebar.styles'


function SideBar() {
  return (
		<S.MainSidebar>
		<S.SidebarPersonal>
			<S.SidebarPersonalName>Sergey.Ivanov</S.SidebarPersonalName>
			<S.SidebarIcon>
				<svg alt="logout">
					<use xlinkHref="img/icon/sprite.svg#logout"></use>
				</svg>
			</S.SidebarIcon>
		</S.SidebarPersonal>

		<PlayList/>
	</S.MainSidebar>
	);
	}
	
	export default SideBar;