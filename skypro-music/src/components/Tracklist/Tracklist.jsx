import React, { useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import * as S from './Tracklist.styles'
import { setCurrentTracks, setNewTracks } from '../../store/reducers/audioReducer'
import { useDispatch, useSelector } from 'react-redux'

const TrackList = ({
    errorTrack,
    // tracks,
    // currentTrack,
    setCurrentTrack,
    // isPlaying,
    isLoading,
    setIsLoading,
}) => {
	const dispatch = useDispatch()
	const tracks = useSelector((state) => state.track.newPlaylist);
  const isPlaying = useSelector((state) => state.track.$isPlaying);
  const play = useSelector((state) => state.track.playTrack);
	const currentTrack = useSelector((state) => state.track.trackId);
	const playTrack = (id, track) => {
    setCurrentTrack({
      id, track
    });
    dispatch(setCurrentTracks(id));
    dispatch(setNewTracks(tracks));
  };
    useEffect(() => {
        if (tracks.length > 0) {
            setIsLoading(false)
        }
    }, [tracks])
    const handleTrackClick = (track) => {
        setCurrentTrack(track)
    }

		// useEffect(() => {
		// 	        if (currentTrack) {
		// 	            const audio = document.getElementById('audio-player')
		// 	            audio.src = currentTrack?.track_file
		// 	            audio.play()
		// 	        }
		// 	    }, [currentTrack?.track_file])

    const placeholderTracks = new Array(10).fill({})
    const tracksToUse = tracks.length > 0 ? tracks : placeholderTracks
    return (
        <div>
            <S.ErrorTrack>{errorTrack}</S.ErrorTrack>
            <S.ContentPlaylist>
                <S.ContentPlaylistSlider>
                    {tracksToUse.map((track, id) => (
                        <S.PlaylistItem
                            key={id}
                            onClick={() => {playTrack(track.id)
														}}
                        >
                            <S.PlaylistTrack onClick={() => handleTrackClick(track)}
                            >
                                <S.TrackTitle>
                                    <S.TrackTitleImage> 
                                        {isLoading ? (
                                            <Skeleton
                                                width={50}
                                                height={50}
                                                baseColor="#202020"
                                                highlightColor="#444"
                                            />
                                        ) : (
																					<S.TrackTitleEx>
                                                    {
																							currentTrack && currentTrack.id  === track.id ? ( <S.ActiveTrack isPlaying={isPlaying}></S.ActiveTrack>):(
                                               
                                            <S.TrackTitleSvg alt="music"> 
                                                <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                                            </S.TrackTitleSvg>)}
																						 </S.TrackTitleEx>
                                        )}
                                    </S.TrackTitleImage>
                                    <div>
                                        {isLoading ? (
                                            <Skeleton
                                                width={300}
                                                baseColor="#202020"
                                                highlightColor="#444"
                                            />
                                        ) : (
                                            <S.TrackTitleLink href="http://">
                                                {track.name}{' '}
                                                <S.TrackTitleSpan>
                                                    {track.trackSpan}
                                                </S.TrackTitleSpan>
                                            </S.TrackTitleLink>
                                        )}
                                    </div>
                                </S.TrackTitle>
                                <S.TrackAuthor>
                                    {isLoading ? (
                                        <Skeleton
                                            width={250}
                                            baseColor="#202020"
                                            highlightColor="#444"
                                        />
                                    ) : (
                                        <S.TrackAuthorLink href="http://">
                                            {track.author}
                                        </S.TrackAuthorLink>
                                    )}
                                </S.TrackAuthor>
                                <S.TrackAlbum>
                                    {isLoading ? (
                                        <Skeleton
                                            width={317}
                                            baseColor="#202020"
                                            highlightColor="#444"
                                        />
                                    ) : (
                                        <S.TrackAlbumLink href="http://">
                                            {track.album}
                                        </S.TrackAlbumLink>
                                    )}
                                </S.TrackAlbum>
                                <div>
                                    <S.TrackTimeSvg alt="time">
                                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                                    </S.TrackTimeSvg>
                                    <S.TrackTimeText>
                                        {track.duration_in_seconds}
                                    </S.TrackTimeText>
                                </div>
                            </S.PlaylistTrack>
                        </S.PlaylistItem>
                    ))}
                </S.ContentPlaylistSlider>
            </S.ContentPlaylist>
        </div>
    )
}

export default TrackList



// import React, { useEffect } from 'react'
// import Skeleton from 'react-loading-skeleton'
// import 'react-loading-skeleton/dist/skeleton.css'
// import * as S from './Tracklist.styles'
// import { activeTrack } from '../../store/reducers/audioReducer'
// import { useDispatch, useSelector } from 'react-redux'

// const TrackList = ({
//     errorTrack,
//     tracks,
//     currentTrack,
//     setCurrentTrack,
//     isPlaying,
//     isLoading,
//     setIsLoading,
// }) => {
// 	const dispatch = useDispatch()
// 	// const activeTrack = useSelector((state)=> state.tracks.activeTrack)
//     useEffect(() => {
//         if (tracks.length > 0) {
//             setIsLoading(false)
//         }
//     }, [tracks])
//     const handleTrackClick = (track) => {
//         setCurrentTrack(track)
//     }
//     useEffect(() => {
//         if (currentTrack) {
//             const audio = document.getElementById('audio-player')
//             audio.src = currentTrack.track_file
//             audio.play()
//         }
//     }, [currentTrack])
//     const placeholderTracks = new Array(10).fill({})
//     const tracksToUse = tracks.length > 0 ? tracks : placeholderTracks
//     return (
//         <div>
//             <S.ErrorTrack>{errorTrack}</S.ErrorTrack>
//             <S.ContentPlaylist>
//                 <S.ContentPlaylistSlider>
//                     {tracksToUse.map((track, id) => (
//                         <S.PlaylistItem
//                             key={id}
//                             onClick={() => {setCurrentTrack(track)
// 														}}
//                         >
//                             <S.PlaylistTrack
//                                 isPlaying={
//                                     isPlaying && track.id === currentTrack.id && ( <S.ActiveTrack isPlaying={isPlaying}></S.ActiveTrack>)}
                                
//                                 onClick={() => handleTrackClick(track)}
//                             >
//                                 <S.TrackTitle>
//                                     <S.TrackTitleImage>
//                                         {isLoading ? (
//                                             <Skeleton
//                                                 width={50}
//                                                 height={50}
//                                                 baseColor="#202020"
//                                                 highlightColor="#444"
//                                             />
//                                         ) : (
//                                             <S.TrackTitleSvg alt="music">
//                                                 <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
//                                             </S.TrackTitleSvg>
//                                         )}
//                                     </S.TrackTitleImage>
//                                     <div>
//                                         {isLoading ? (
//                                             <Skeleton
//                                                 width={300}
//                                                 baseColor="#202020"
//                                                 highlightColor="#444"
//                                             />
//                                         ) : (
//                                             <S.TrackTitleLink href="http://">
//                                                 {track.name}{' '}
//                                                 <S.TrackTitleSpan>
//                                                     {track.trackSpan}
//                                                 </S.TrackTitleSpan>
//                                             </S.TrackTitleLink>
//                                         )}
//                                     </div>
//                                 </S.TrackTitle>
//                                 <S.TrackAuthor>
//                                     {isLoading ? (
//                                         <Skeleton
//                                             width={250}
//                                             baseColor="#202020"
//                                             highlightColor="#444"
//                                         />
//                                     ) : (
//                                         <S.TrackAuthorLink href="http://">
//                                             {track.author}
//                                         </S.TrackAuthorLink>
//                                     )}
//                                 </S.TrackAuthor>
//                                 <S.TrackAlbum>
//                                     {isLoading ? (
//                                         <Skeleton
//                                             width={317}
//                                             baseColor="#202020"
//                                             highlightColor="#444"
//                                         />
//                                     ) : (
//                                         <S.TrackAlbumLink href="http://">
//                                             {track.album}
//                                         </S.TrackAlbumLink>
//                                     )}
//                                 </S.TrackAlbum>
//                                 <div>
//                                     <S.TrackTimeSvg alt="time">
//                                         <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
//                                     </S.TrackTimeSvg>
//                                     <S.TrackTimeText>
//                                         {track.duration_in_seconds}
//                                     </S.TrackTimeText>
//                                 </div>
//                             </S.PlaylistTrack>
//                         </S.PlaylistItem>
//                     ))}
//                 </S.ContentPlaylistSlider>
//             </S.ContentPlaylist>
//         </div>
//     )
// }

// export default TrackList
