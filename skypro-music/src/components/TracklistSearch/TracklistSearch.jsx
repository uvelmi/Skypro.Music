import FilterSearch from '../FilterSearch/FilterSearch'
import TrackList from '../Tracklist/Tracklist'
import * as S from './TracklistSearch.styles'

function TrackListSearch({ isLoading, setIsLoading, tracks, errorTrack, setCurrentTrack, currentTrack }) {
    return (
        <S.MainCenterblock>
            <S.CenterblockSearch>
                <S.SearchSvg>
                    <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
                </S.SearchSvg>
                <S.SearchText type="search" placeholder="Поиск" name="search" />
            </S.CenterblockSearch>
            <S.CenterblockH2>Треки</S.CenterblockH2>
            <FilterSearch />
            <S.CenterblockContent>
                <S.ContentTitle>
                    <S.Col01>Трек</S.Col01>
                    <S.Col02>ИСПОЛНИТЕЛЬ</S.Col02>
                    <S.Col03>АЛЬБОМ</S.Col03>
                    <S.Col04>
                        <S.PlaylistTitleSvg alt="time">
                            <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
                        </S.PlaylistTitleSvg>
                    </S.Col04>
                </S.ContentTitle>
                <TrackList isLoading={isLoading} setIsLoading={setIsLoading} tracks={tracks} errorTrack={errorTrack} currentTrack={currentTrack} setCurrentTrack={setCurrentTrack}/>
            </S.CenterblockContent>
        </S.MainCenterblock>
    )
}

export default TrackListSearch
