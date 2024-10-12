import React, { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import ProgressBar from '../ProgressBar/ProgressBar'
import {
    setShuffleTracks,
    setPlayTracks,
    getPlayTrack,
    getPauseTrack,
    setCurrentTracks,
    setNewTracks,
} from '../../store/reducers/audioReducer'

import * as S from './AudioPlayer.styles'

function AudioPlayer({
    // currentTrack,
    setCurrentTrack,
    handleCurrentTime,
    currentTime,
    isLoading = { isLoading },
}) {
    // const [isPlaying, setIsPlaying] = useState(false)
    const $isPlaying = useSelector((state) => state.track.$isPlaying)
    const [isLooped, setIsLooped] = useState(false)
    const [isVolume, setIsVolume] = useState(1)

    const [shuffle, setShuffle] = useState(false)

    const dispatch = useDispatch()
    const playlist = useSelector((state) => state.track.newPlaylist)
    const currentTrack = useSelector((state) => state.track.trackId)
    const isShuffle = useSelector((state) => state.track.shufflePlaylist)
    const isPlayingTracks = useSelector((state) => state.track.playTrack)
    const audioRef = useRef(null)

    // useEffect(() => {
    // 	setIsPlaying(true)
    // }, [currentTrack?.track_file])

    useEffect(() => {
        if (currentTrack) togglePlay()
    }, [currentTrack?.track_file])

    useEffect(() => {
        setIsLooped(false)
    }, [currentTrack])

    const handleStart = () => {
        audioRef.current.play()
        dispatch(getPlayTrack())
    }

    const handleStop = () => {
        audioRef.current.pause()
        dispatch(getPauseTrack())
    }

    const handleLoop = () => {
        audioRef.current.loop = !audioRef.current.loop
        setIsLooped(!isLooped)
    }

    const handleUpLoop = () => {
        audioRef.current.loop = false
        setIsLooped(false)
    }

    const handleNextTrack = () => {
        const trackList = shuffle ? { ...isShuffle } : { ...playlist }
        let index = Object.keys(trackList).find(
            (key) => trackList[key].id === currentTrack.id
        )

        console.log(index)

        if (index === Object.keys(trackList).length - 1) return

        if (shuffle) {
            index = parseInt(Math.random() * trackList.length)
        } else {
            index = parseInt(index) + 1
        }

        console.log(index)

        setCurrentTracks({
            id: trackList[index].id,
            author: trackList[index].author,
            title: trackList[index].name,
            track_file: trackList[index].track_file,
            progress: 0,
            time: trackList[index].duration_in_seconds,
        })
        dispatch(setCurrentTracks(trackList[index].id))
        console.log(trackList[index])
    }
    const handlePrevTrack = () => {
        if (audioRef.current && currentTime > 5) {
            audioRef.current.currentTime = 0
            return
        }
        const trackList = shuffle ? { ...isShuffle } : { ...playlist }
        let index = Object.keys(trackList).find(
            (key) => trackList[key].id === currentTrack.id
        )
        if (index === 0) return
        index = parseInt(index) - 1
        setCurrentTracks({
            id: trackList[index].id,
            author: trackList[index].author,
            title: trackList[index].name,
            track_file: trackList[index].track_file,
            progress: 0,
            time: trackList[index].duration_in_seconds,
        })
        dispatch(setCurrentTracks(trackList[index].id))
    }

    const handleShuffle = () => {
        if (shuffle) {
            setShuffle(false)
            dispatch(setShuffleTracks({}))
        } else {
            const shuffleTrack = Object.values(playlist).sort(function () {
                return Math.round(Math.random()) - 0.5
            })
            setShuffle(true)
            dispatch(setShuffleTracks({ ...shuffleTrack }))
        }
    }

    const togglePlay = $isPlaying ? handleStop : handleStart
    const toggleLoop = isLooped ? handleUpLoop : handleLoop

    const handleVolumeChange = (e) => {
        const volume = e.target.value
        setIsVolume(volume)
        audioRef.current.volume = volume
    }

    return (
        <>
            <S.Bar>
                {currentTrack ? (
                    <S.BarContent>
                        <audio
                            loop={isLooped}
                            id="audio-player"
                            ref={audioRef}
                            onEnded={handleNextTrack}
                            autoPlay
                        >
                            <source
                                src={currentTrack.track_file}
                                type="audio/mpeg"
                            />
                            <source
                                src={currentTrack.track_file}
                                type="audio/ogg"
                            />
                        </audio>
                        <ProgressBar
                            currentTime={currentTime}
                            handleCurrentTime={handleCurrentTime}
                            audioRef={audioRef}
                        ></ProgressBar>
                        <S.BarPlayerBlock>
                            <S.BarPlayer>
                                <S.PlayerControls>
                                    <S.PlayerBtnPrev onClick={handlePrevTrack}>
                                        <S.PlayerBtnPrevSvg alt="prev">
                                            <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
                                        </S.PlayerBtnPrevSvg>
                                    </S.PlayerBtnPrev>
                                    <S.PlayerBtnPlay onClick={togglePlay}>
                                        <S.PlayerBtnPlaySvg alt="play">
                                            {$isPlaying ? (
                                                <use xlinkHref="img/icon/sprite.svg#icon-pause"></use>
                                            ) : (
                                                <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
                                            )}
                                        </S.PlayerBtnPlaySvg>
                                    </S.PlayerBtnPlay>
                                    <S.PlayerBtnNext onClick={handleNextTrack}>
                                        <S.PlayerBtnNextSvg alt="next">
                                            <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
                                        </S.PlayerBtnNextSvg>
                                    </S.PlayerBtnNext>
                                    <S.PlayerBtnRepeat onClick={toggleLoop}>
                                        <S.PlayerBtnRepeatSvg
                                            alt="repeat"
                                            $active={isLooped}
                                        >
                                            <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
                                        </S.PlayerBtnRepeatSvg>
                                    </S.PlayerBtnRepeat>
                                    <S.PlayerBtnShuffle onClick={handleShuffle}>
                                        <S.PlayerBtnShuffleSvg
                                            alt="shuffle"
                                            $active={shuffle}
                                        >
                                            <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
                                        </S.PlayerBtnShuffleSvg>
                                    </S.PlayerBtnShuffle>
                                </S.PlayerControls>
                                <S.PlayerTrackPlay>
                                    <S.PlayerTrackContain>
                                        <S.TrackPlayImage>
                                            {isLoading ? (
                                                <Skeleton
                                                    width={50}
                                                    height={50}
                                                    baseColor="#202020"
                                                    highlightColor="#444"
                                                />
                                            ) : (
                                                <S.TrackPlaySvg alt="music">
                                                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                                                </S.TrackPlaySvg>
                                            )}
                                        </S.TrackPlayImage>
                                        <S.TrackPlayAuthor>
                                            {isLoading ? (
                                                <Skeleton
                                                    width={50}
                                                    baseColor="#202020"
                                                    highlightColor="#444"
                                                />
                                            ) : (
                                                <S.TrackPlayAuthorLink href="http://">
                                                    {currentTrack.name}
                                                </S.TrackPlayAuthorLink>
                                            )}
                                        </S.TrackPlayAuthor>
                                        <S.TrackPlayAlbum>
                                            {isLoading ? (
                                                <Skeleton
                                                    width={50}
                                                    baseColor="#202020"
                                                    highlightColor="#444"
                                                />
                                            ) : (
                                                <S.TrackPlayAlbumLink href="http://">
                                                    {currentTrack.author}
                                                </S.TrackPlayAlbumLink>
                                            )}
                                        </S.TrackPlayAlbum>
                                    </S.PlayerTrackContain>
                                    <S.TrackPlayLikeDis>
                                        <S.TrackdPlay>
                                            <S.TrackdPlayLikeSvg alt="like">
                                                <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                                            </S.TrackdPlayLikeSvg>
                                        </S.TrackdPlay>
                                        <S.TrackdPlayDislike>
                                            <S.TrackdPlayDislikeSvg alt="dislike">
                                                <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
                                            </S.TrackdPlayDislikeSvg>
                                        </S.TrackdPlayDislike>
                                    </S.TrackPlayLikeDis>
                                </S.PlayerTrackPlay>
                            </S.BarPlayer>
                            <S.BarVolumeBlock>
                                <S.VolumeContent>
                                    <S.VolumeImage>
                                        <S.VolumeSvg alt="volume">
                                            <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
                                        </S.VolumeSvg>
                                    </S.VolumeImage>
                                    <S.VolumeProgress>
                                        <S.VolumeProgressLine
                                            min={0}
                                            max={1}
                                            step={0.1}
                                            value={isVolume}
                                            onChange={handleVolumeChange}
                                            type="range"
                                            name="range"
                                        />
                                    </S.VolumeProgress>
                                </S.VolumeContent>
                            </S.BarVolumeBlock>
                        </S.BarPlayerBlock>
                    </S.BarContent>
                ) : null}
            </S.Bar>
        </>
    )
}

export default AudioPlayer

// import React, { useState, useEffect, useRef } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import Skeleton from 'react-loading-skeleton'
// import 'react-loading-skeleton/dist/skeleton.css'
// import ProgressBar from '../ProgressBar/ProgressBar'
// import { setShuffleTracks, setPlayTracks, setCurrentTracks, setNewTracks, } from '../../store/reducers/audioReducer'

// import * as S from './AudioPlayer.styles'

// function AudioPlayer({
//     currentTrack,
// 		setCurrentTrack,
//     handleCurrentTime,
//     currentTime,
//     isLoading = { isLoading },
// }) {

//     const [isPlaying, setIsPlaying] = useState(false)
//     const [isLooped, setIsLooped] = useState(false)
//     const [isVolume, setIsVolume] = useState(1)

// 		const [shuffle, setShuffle] = useState(false);

//   const dispatch = useDispatch();
//   const playlist = useSelector((state) => state.track.newPlaylist);
//   // const currentTrack = useSelector((state) => state.track.trackId);
//   const isShuffle = useSelector((state) => state.track.shufflePlaylist);
//   // const isPlayingTracks = useSelector((state) => state.track.playTrack);

//     const audioRef = useRef(null)

//     useEffect(() => {
// 			setIsPlaying(true)
//     }, [currentTrack])

//     useEffect(() => {
//         setIsLooped(false)
//     }, [currentTrack])

//     const handleStart = () => {
//         audioRef.current.play()
//         dispatch(setIsPlaying(isPlaying));
//     }

//     const handleStop = () => {
//         audioRef.current.pause()
//         dispatch(setIsPlaying(!isPlaying));
//     }

//     const handleLoop = () => {
//         audioRef.current.loop = !audioRef.current.loop
//         setIsLooped(!isLooped)
//     }

//     const handleUpLoop = () => {
//         audioRef.current.loop = false
//         setIsLooped(false)
//     }

// 		const handleNextTrack = () => {
// 			const trackList = shuffle ? { ...isShuffle } : { ...playlist };
// 			let index = Object.keys(trackList).find(
// 				(key) => trackList[key].id === currentTrack.id
// 			);
// 			if (+index === Object.keys(trackList).length - 1) return;
// 			index = +index + 1;
// 			setCurrentTracks({
// 				id: trackList[index].id,
// 				author: trackList[index].author,
// 				title: trackList[index].name,
// 				track_file: trackList[index].track_file,
// 				progress: 0,
// 				time: trackList[index].duration_in_seconds,
// 			});
// 			dispatch(setCurrentTracks(trackList[index].id));
// 			console.log(trackList[index]);
// 		};
// 		const handlePrevTrack = () => {
// 			if (audioRef.current?.currentTime > 5) {
// 				audioRef.current.currentTime = 0;
// 				return;
// 			}
// 			const trackList = shuffle ? { ...isShuffle } : { ...playlist };
// 			let index = Object.keys(trackList).find(
// 				(key) => trackList[key].id === currentTrack.id
// 			);
// 			if (+index === 0) return;
// 			index = +index - 1;
// 			setCurrentTracks({
// 				id: trackList[index].id,
// 				author: trackList[index].author,
// 				title: trackList[index].name,
// 				track_file: trackList[index].track_file,
// 				progress: 0,
// 				time: trackList[index].duration_in_seconds,
// 			});
// 			dispatch(setCurrentTracks(trackList[index].id));
// 			console.log(trackList[index]);

// 		};

// 		const handleShuffle = () => {
// 			if (shuffle) {
// 				setShuffle(false);
// 				dispatch(setShuffleTracks({}));
// 			} else {
// 				const shuffleTracks = Object.values(playlist).sort(function () {
// 					return Math.round(Math.random()) - 0.5;
// 				});
// 				setShuffle(true);
// 				dispatch(setShuffleTracks({ ...shuffleTracks }));
// 			}
// 		};

//     const togglePlay = isPlaying ? handleStop : handleStart
//     const toggleLoop = isLooped ? handleUpLoop : handleLoop

//     const handleVolumeChange = (e) => {
//         const volume = e.target.value
//         setIsVolume(volume)
//         audioRef.current.volume = volume
//     }

//       return (
//         <>
//             <S.Bar>
//                 {currentTrack ? (
//                     <S.BarContent>
//                         <audio loop={isLooped} id="audio-player" ref={audioRef} onEnded = {handleNextTrack}
// 												>
//                             <source
//                                 src={currentTrack?.track_file }
//                                 type="audio/mpeg"
//                             />
// 														<source src={currentTrack.track_file} type="audio/ogg" />
//                         </audio>
//                         <ProgressBar
//                             currentTime={currentTime}
//                             handleCurrentTime={handleCurrentTime}
//                             audioRef={audioRef}
//                         ></ProgressBar>
//                         <S.BarPlayerBlock>
//                             <S.BarPlayer>
//                                 <S.PlayerControls>
//                                     <S.PlayerBtnPrev onClick={handlePrevTrack}>
//                                         <S.PlayerBtnPrevSvg alt="prev">
//                                             <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
//                                         </S.PlayerBtnPrevSvg>
//                                     </S.PlayerBtnPrev>
//                                     <S.PlayerBtnPlay onClick={togglePlay}>
//                                         <S.PlayerBtnPlaySvg alt="play">
//                                             {isPlaying ? (
//                                                 <use xlinkHref="img/icon/sprite.svg#icon-pause"></use>
//                                             ) : (
//                                                 <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
//                                             )}
//                                         </S.PlayerBtnPlaySvg>
//                                     </S.PlayerBtnPlay>
//                                     <S.PlayerBtnNext onClick={handleNextTrack}>
//                                         <S.PlayerBtnNextSvg alt="next">
//                                             <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
//                                         </S.PlayerBtnNextSvg>
//                                     </S.PlayerBtnNext>
//                                     <S.PlayerBtnRepeat onClick={toggleLoop}>
//                                         <S.PlayerBtnRepeatSvg
//                                             alt="repeat"
//                                             $active={isLooped}
//                                         >
//                                             <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
//                                         </S.PlayerBtnRepeatSvg>
//                                     </S.PlayerBtnRepeat>
//                                     <S.PlayerBtnShuffle onClick={handleShuffle}>
//                                         <S.PlayerBtnShuffleSvg alt="shuffle" $active={shuffle}>
//                                             <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
//                                         </S.PlayerBtnShuffleSvg>
//                                     </S.PlayerBtnShuffle>
//                                 </S.PlayerControls>
//                                 <S.PlayerTrackPlay>
//                                     <S.PlayerTrackContain>
//                                         <S.TrackPlayImage>
//                                             {isLoading ? (
//                                                 <Skeleton
//                                                     width={50}
//                                                     height={50}
//                                                     baseColor="#202020"
//                                                     highlightColor="#444"
//                                                 />
//                                             ) : (
//                                                 <S.TrackPlaySvg alt="music">
//                                                     <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
//                                                 </S.TrackPlaySvg>
//                                             )}
//                                         </S.TrackPlayImage>
//                                         <S.TrackPlayAuthor>
//                                             {isLoading ? (
//                                                 <Skeleton
//                                                     width={50}
//                                                     baseColor="#202020"
//                                                     highlightColor="#444"
//                                                 />
//                                             ) : (
//                                                 <S.TrackPlayAuthorLink href="http://">
//                                                     {currentTrack.name}
//                                                 </S.TrackPlayAuthorLink>
//                                             )}
//                                         </S.TrackPlayAuthor>
//                                         <S.TrackPlayAlbum>
//                                             {isLoading ? (
//                                                 <Skeleton
//                                                     width={50}
//                                                     baseColor="#202020"
//                                                     highlightColor="#444"
//                                                 />
//                                             ) : (
//                                                 <S.TrackPlayAlbumLink href="http://">
//                                                     {currentTrack.author}
//                                                 </S.TrackPlayAlbumLink>
//                                             )}
//                                         </S.TrackPlayAlbum>
//                                     </S.PlayerTrackContain>
//                                     <S.TrackPlayLikeDis>
//                                         <S.TrackdPlay>
//                                             <S.TrackdPlayLikeSvg alt="like">
//                                                 <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
//                                             </S.TrackdPlayLikeSvg>
//                                         </S.TrackdPlay>
//                                         <S.TrackdPlayDislike>
//                                             <S.TrackdPlayDislikeSvg alt="dislike">
//                                                 <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
//                                             </S.TrackdPlayDislikeSvg>
//                                         </S.TrackdPlayDislike>
//                                     </S.TrackPlayLikeDis>
//                                 </S.PlayerTrackPlay>
//                             </S.BarPlayer>
//                             <S.BarVolumeBlock>
//                                 <S.VolumeContent>
//                                     <S.VolumeImage>
//                                         <S.VolumeSvg alt="volume">
//                                             <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
//                                         </S.VolumeSvg>
//                                     </S.VolumeImage>
//                                     <S.VolumeProgress>
//                                         <S.VolumeProgressLine
//                                             min={0}
//                                             max={1}
//                                             step={0.1}
//                                             value={isVolume}
//                                             onChange={handleVolumeChange}
//                                             type="range"
//                                             name="range"
//                                         />
//                                     </S.VolumeProgress>
//                                 </S.VolumeContent>
//                             </S.BarVolumeBlock>
//                         </S.BarPlayerBlock>
//                     </S.BarContent>
//                 ) : null}
//             </S.Bar>
//         </>
//     )
// }

// export default AudioPlayer
