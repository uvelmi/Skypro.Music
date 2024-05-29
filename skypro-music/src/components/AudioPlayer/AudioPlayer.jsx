import React, { useState, useEffect, useRef } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import ProgressBar from '../ProgressBar/ProgressBar'

import * as S from './AudioPlayer.styles'


function AudioPlayer({currentTrack, handleCurrentTime, currentTime}) {

	const [isPlaying, setIsPlaying] = useState(false);
	const [isLooped, setIsLooped] = useState(false);
	const [isVolume, setIsVolume] = useState(1);
	const [repeat, setRepeat] = useState(false);

	const audioRef = useRef(null);

	useEffect(() => {
    setIsPlaying(true)
  }, [currentTrack]);

	useEffect(() => {
    setIsLooped(false)
  }, [currentTrack]); 

	const handleStart = () => {
		audioRef.current.play();
		setIsPlaying(true);
	}

	const handleStop = () => {
		audioRef.current.pause();
		setIsPlaying(false);
	}


	const handleLoop = () => {
    audioRef.current.loop = !audioRef.current.loop;
    setIsLooped(!isLooped);
  };

	const handleUpLoop = () => {
		audioRef.current.loop = false;
		setIsLooped(false)
	}

	const togglePlay = isPlaying ? handleStop : handleStart;
	const toggleLoop = isLooped ? handleUpLoop : handleLoop;

	const handleVolumeChange = (e) => {
		const volume = e.target.value;
		setIsVolume(volume);
		audioRef.current.volume = volume;
	}
	

		
const handlePrev = () => {
	alert("Ещё не реализовано");
};

const handleRepeat = () => {
	setRepeat(!repeat);
};


    return (
			<>
       <S.Bar>
					
           {currentTrack ? ( <S.BarContent>
						<audio loop={isLooped} id="audio-player"  ref={audioRef}>
        <source src={currentTrack.track_file} type="audio/mpeg" />
      </audio>
			<ProgressBar currentTime={currentTime} handleCurrentTime={handleCurrentTime} audioRef={audioRef}></ProgressBar> 
                <S.BarPlayerProgress></S.BarPlayerProgress>
                <S.BarPlayerBlock>
                    <S.BarPlayer>
                        <S.PlayerControls>
                            <S.PlayerBtnPrev onClick={handlePrev}>
                                <S.PlayerBtnPrevSvg alt="prev">
                                    <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
                                </S.PlayerBtnPrevSvg>
                            </S.PlayerBtnPrev>
                            <S.PlayerBtnPlay onClick={togglePlay}>
  <S.PlayerBtnPlaySvg alt="play">
    {isPlaying ? (
      <use xlinkHref="img/icon/sprite.svg#icon-pause"></use>
    ) : (
      <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
    )}
  </S.PlayerBtnPlaySvg>
</S.PlayerBtnPlay>
                            <S.PlayerBtnNext onClick={handlePrev}>
                                <S.PlayerBtnNextSvg alt="next">
                                    <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
                                </S.PlayerBtnNextSvg>
                            </S.PlayerBtnNext>

                            <S.PlayerBtnRepeat onClick={toggleLoop} >
                                <S.PlayerBtnRepeatSvg alt="repeat" active={isLooped}>
                                    <use xlinkHref="img/icon/sprite.svg#icon-repeat" ></use>
                                </S.PlayerBtnRepeatSvg>
                            </S.PlayerBtnRepeat>
                            <S.PlayerBtnShuffle onClick={handlePrev}>
                                <S.PlayerBtnShuffleSvg alt="shuffle">
                                    <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
                                </S.PlayerBtnShuffleSvg>
                            </S.PlayerBtnShuffle>

                        </S.PlayerControls>
                        <S.PlayerTrackPlay>
                            <S.PlayerTrackContain>
                                <S.TrackPlayImage>
                                        <S.TrackPlaySvg alt="music">
                                            <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                                        </S.TrackPlaySvg>
                                </S.TrackPlayImage>
                                <S.TrackPlayAuthor>
                                        <S.TrackPlayAuthorLink href="http://">
                                            {currentTrack.name} 
                                        </S.TrackPlayAuthorLink>
                                </S.TrackPlayAuthor>
                                <S.TrackPlayAlbum>
                                        <S.TrackPlayAlbumLink href="http://">
                                             {currentTrack.author}
                                        </S.TrackPlayAlbumLink>
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
                                <S.VolumeProgressLine min={0} max={1} step={0.1} value={isVolume} onChange={handleVolumeChange}
                                    type="range"
                                    name="range"
                                />
                            </S.VolumeProgress>
                        </S.VolumeContent>
                    </S.BarVolumeBlock>
                </S.BarPlayerBlock>
            </S.BarContent>) : null}
        </S.Bar>
				</>
    )
}

export default AudioPlayer
