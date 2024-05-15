import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import * as S from './Tracklist.styles'
import { getTracks } from '../../api'


const TrackList = () => {

	const [isLoading, setIsLoading] = useState( true)
	const [tracks, setTracks] = useState([])
	const [errorTrack, setErrorTrack] = useState(null)

	useEffect(() => {
		async function getAllTracks() {
		setIsLoading(true)
		try {
			const tracks = await getTracks()
      console.log(tracks);
      setTracks(tracks)
			setIsLoading(false)
	}	catch(error) {
			setErrorTrack('Не удалось загрузить плейлист, попробуйте позже: ' + error.message)
			setIsLoading(false)
			setTracks([])
		}
		}
		getAllTracks();
  }, [])

    return (
			<div>
				<S.ErrorTrack>{errorTrack}</S.ErrorTrack>
        <S.ContentPlaylist>
            {tracks.map((track) => (
                <S.PlaylistItem key={track.id}>
                    <S.PlaylistTrack>
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
                                    <S.TrackTitleSvg alt="music">
                                        <use xlinkHref='img/icon/sprite.svg#icon-note'></use>
                                    </S.TrackTitleSvg>
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
                                <use xlinkHref= 'img/icon/sprite.svg#icon-like'></use>
                            </S.TrackTimeSvg>
                            <S.TrackTimeText>{track.duration_in_seconds}</S.TrackTimeText>
                        </div>
                    </S.PlaylistTrack>
                </S.PlaylistItem>
            ))}
        </S.ContentPlaylist>
				</div>
    )
}

export default TrackList
