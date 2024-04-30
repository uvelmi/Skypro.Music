
import React, { useState, useEffect } from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import * as S from './Tracklist.styles'




const TrackList = ({ Tracks }) => {
	const [isLoading, setLoading] = useState(true);

			useEffect(() => {
				const timer = setTimeout(() => {
					setLoading(false);
				}, 5000);
				return () => clearTimeout(timer);
			}, []);

  return (
    <S.ContentPlaylist>
      {Tracks.map((track, index) => (
        <S.PlaylistItem key={index}>
          <S.PlaylistTrack>
            <S.TrackTitle>
              <S.TrackTitleImage>{isLoading ? <Skeleton  width={50} height={50} baseColor='#202020' highlightColor='#444'/> : 
                <S.TrackTitleSvg alt="music"><use xlinkHref={track.icon}></use></S.TrackTitleSvg>}
              </S.TrackTitleImage>
              <div>{isLoading ? <Skeleton width={300} baseColor='#202020' highlightColor='#444'/> : 
                <S.TrackTitleLink href="http://">{track.title} <S.TrackTitleSpan >{track.trackSpan}</S.TrackTitleSpan></S.TrackTitleLink>}
              </div>
            </S.TrackTitle>
            <S.TrackAuthor>{isLoading ? <Skeleton width={250} baseColor='#202020' highlightColor='#444'/> : 
              <S.TrackAuthorLink href="http://">{track.author}</S.TrackAuthorLink>}
            </S.TrackAuthor>
            <S.TrackAlbum>{isLoading ? <Skeleton width={317} baseColor='#202020' highlightColor='#444'/> : 
              <S.TrackAlbumLink href="http://">{track.album}</S.TrackAlbumLink>}
            </S.TrackAlbum>
            <div>
              <S.TrackTimeSvg alt="time"><use xlinkHref={track.iconTime}></use></S.TrackTimeSvg><S.TrackTimeText>{track.time}</S.TrackTimeText>
						</div>
          </S.PlaylistTrack>
        </S.PlaylistItem>
      ))}
    </S.ContentPlaylist>
  );
}

export default TrackList;