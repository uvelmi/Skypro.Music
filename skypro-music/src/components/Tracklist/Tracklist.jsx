import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import * as S from './Tracklist.styles'

const Tracks = [
    {
        id: 1,
        title: 'Guilt',
        author: 'Nero',
        album: 'Welcome Reality',
        time: '4:44',
        iconTime: 'img/icon/sprite.svg#icon-like',
        icon: 'img/icon/sprite.svg#icon-note',
        trackSpan: '',
    },
    {
        id: 2,
        title: 'Elektro',
        author: 'Dynoro, Outwork, Mr. Gee',
        album: 'Elektro',
        time: '2:22',
        iconTime: 'img/icon/sprite.svg#icon-like',
        icon: 'img/icon/sprite.svg#icon-note',
        trackSpan: '',
    },
    {
        id: 3,
        title: 'I’m Fire',
        author: 'Ali Bakgor',
        album: 'I’m Fire',
        time: '2:22',
        iconTime: 'img/icon/sprite.svg#icon-like',
        icon: 'img/icon/sprite.svg#icon-note',
        trackSpan: '',
    },
    {
        id: 4,
        title: 'Non Stop',
        author: 'Стоункат, Psychopath',
        album: 'Non Stop',
        time: '4:12',
        iconTime: 'img/icon/sprite.svg#icon-like',
        icon: 'img/icon/sprite.svg#icon-note',
        trackSpan: '(Remix)',
    },
    {
        id: 5,
        title: 'Run Run',
        author: 'Jaded, Will Clarke, AR/CO',
        album: 'Run Run',
        time: '2:54',
        iconTime: 'img/icon/sprite.svg#icon-like',
        icon: 'img/icon/sprite.svg#icon-note',
        trackSpan: '(feat. AR/CO)',
    },
    {
        id: 6,
        title: 'Eyes on Fire',
        author: 'Blue Foundation, Zeds Dead',
        album: 'Eyes on Fire',
        time: '5:20',
        iconTime: 'img/icon/sprite.svg#icon-like',
        icon: 'img/icon/sprite.svg#icon-note',
        trackSpan: '(Zeds Dead Remix)',
    },
    {
        id: 7,
        title: 'Mucho Bien',
        author: 'HYBIT, Mr. Black, Offer Nissim, Hi Profile',
        album: 'Mucho Bien',
        time: '3:41',
        iconTime: 'img/icon/sprite.svg#icon-like',
        icon: 'img/icon/sprite.svg#icon-note',
        trackSpan: '(Hi Profile Remix)',
    },
    {
        id: 8,
        title: 'Knives n Cherries',
        author: 'minthaze',
        album: 'Captivating',
        time: '1:48',
        iconTime: 'img/icon/sprite.svg#icon-like',
        icon: 'img/icon/sprite.svg#icon-note',
        trackSpan: '',
    },
    {
        id: 9,
        title: 'How Deep Is Your Love',
        author: 'Calvin Harris, Disciples',
        album: 'How Deep Is Your Love',
        time: '3:32',
        iconTime: 'img/icon/sprite.svg#icon-like',
        icon: 'img/icon/sprite.svg#icon-note',
        trackSpan: '',
    },
    {
        id: 10,
        title: 'Morena',
        author: 'Tom Boxer',
        album: 'Soundz Made in Romania',
        time: '3:36',
        iconTime: 'img/icon/sprite.svg#icon-like',
        icon: 'img/icon/sprite.svg#icon-note',
        trackSpan: '',
    },
]

const TrackList = ({ isLoading }) => {
    return (
        <S.ContentPlaylist>
            {Tracks.map((track, index) => (
                <S.PlaylistItem key={index}>
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
                                        <use xlinkHref={track.icon}></use>
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
                                        {track.title}{' '}
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
                                <use xlinkHref={track.iconTime}></use>
                            </S.TrackTimeSvg>
                            <S.TrackTimeText>{track.time}</S.TrackTimeText>
                        </div>
                    </S.PlaylistTrack>
                </S.PlaylistItem>
            ))}
        </S.ContentPlaylist>
    )
}

export default TrackList
