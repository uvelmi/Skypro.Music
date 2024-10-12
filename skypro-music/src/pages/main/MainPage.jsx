import NavMenu from '../../components/NavMenu/NavMenu'
import TrackListSearch from '../../components/TracklistSearch/TracklistSearch'
import SideBar from '../../components/Sidebar/Sidebar'
import AudioPlayer from '../../components/AudioPlayer/AudioPlayer'
import * as S from '../App.styles'
export const MainPage = ({
    isLoading,
    setIsLoading,
    tracks,
    errorTrack,
    currentTrack,
    setCurrentTrack,
		setIsPlaylist,
		playlist,
}) => {
    return (
        <S.Container>
            <S.Main>
                <NavMenu />
                <>
                    <TrackListSearch
                        isLoading={isLoading}
                        setIsLoading={setIsLoading}
                        tracks={tracks}
                        errorTrack={errorTrack}
                        setCurrentTrack={setCurrentTrack}
                        currentTrack={currentTrack}
                    />
                    <SideBar
                        isLoading={isLoading}
                        setIsLoading={setIsLoading}
                    />
                    <AudioPlayer
                        isLoading={isLoading}
                        setIsLoading={setIsLoading}
                        currentTrack={currentTrack}
                        setCurrentTrack={setCurrentTrack}
                        errorTrack={errorTrack}
												setIsPlaylist={setIsPlaylist}
												playlist={playlist}
                    />
                </>
            </S.Main>
            <footer className="footer"></footer>
        </S.Container>
    )
}


// import NavMenu from '../../components/NavMenu/NavMenu'
// import TrackListSearch from '../../components/TracklistSearch/TracklistSearch'
// import SideBar from '../../components/Sidebar/Sidebar'
// import AudioPlayer from '../../components/AudioPlayer/AudioPlayer'
// import * as S from '../App.styles'
// export const MainPage = ({
//     isLoading,
//     setIsLoading,
//     tracks,
//     errorTrack,
//     currentTrack,
//     setCurrentTrack,
// 		setIsPlaylist,
// 		playlist,
// }) => {
//     return (
//         <S.Container>
//             <S.Main>
//                 <NavMenu />
//                 <>
//                     <TrackListSearch
//                         isLoading={isLoading}
//                         setIsLoading={setIsLoading}
//                         tracks={tracks}
//                         errorTrack={errorTrack}
//                         setCurrentTrack={setCurrentTrack}
//                         currentTrack={currentTrack}
//                     />
//                     <SideBar
//                         isLoading={isLoading}
//                         setIsLoading={setIsLoading}
//                     />
//                     <AudioPlayer
//                         isLoading={isLoading}
//                         setIsLoading={setIsLoading}
//                         currentTrack={currentTrack}
//                         setCurrentTrack={setCurrentTrack}
//                         errorTrack={errorTrack}
// 												setIsPlaylist={setIsPlaylist}
// 												playlist={playlist}
//                     />
//                 </>
//             </S.Main>
//             <footer className="footer"></footer>
//         </S.Container>
//     )
// }
