import FilterSearch from './FilterSearch'
import TracklistData from './TracklistData'

function TrackListSearch() {
  return (
		<div className="main__centerblock centerblock">
		<div className="centerblock__search search">
			<svg className="search__svg"><use xlinkHref="img/icon/sprite.svg#icon-search"></use></svg><input className="search__text" type="search" placeholder="Поиск" name="search"/>
		</div>
		<h2 className="centerblock__h2">Треки</h2>
		<FilterSearch/>


		<div className="centerblock__content">
			<div className="content__title playlist-title">
				<div className="playlist-title__col col01">Трек</div>
				<div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
				<div className="playlist-title__col col03">АЛЬБОМ</div>
				<div className="playlist-title__col col04">
					<svg className="playlist-title__svg" alt="time"><use xlinkHref="img/icon/sprite.svg#icon-watch"></use></svg>
				</div>
			</div>
			<TracklistData/> 
			</div>
			
	</div>
			);
		}
		
		export default TrackListSearch;