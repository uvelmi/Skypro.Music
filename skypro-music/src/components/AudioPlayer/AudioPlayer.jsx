import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import * as S from './AudioPlayer.styles'

function AudioPlayer({ isLoading }) {
    return (
        <S.Bar>
            <S.BarContent>
                <S.BarPlayerProgress></S.BarPlayerProgress>
                <S.BarPlayerBlock>
                    <S.BarPlayer>
                        <S.PlayerControls>
                            <S.PlayerBtnPrev>
                                <S.PlayerBtnPrevSvg alt="prev">
                                    <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
                                </S.PlayerBtnPrevSvg>
                            </S.PlayerBtnPrev>
                            <S.PlayerBtnPlay>
                                <S.PlayerBtnPlaySvg alt="play">
                                    <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
                                </S.PlayerBtnPlaySvg>
                            </S.PlayerBtnPlay>
                            <S.PlayerBtnNext>
                                <S.PlayerBtnNextSvg alt="next">
                                    <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
                                </S.PlayerBtnNextSvg>
                            </S.PlayerBtnNext>
                            <S.PlayerBtnRepeat>
                                <S.PlayerBtnRepeatSvg alt="repeat">
                                    <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
                                </S.PlayerBtnRepeatSvg>
                            </S.PlayerBtnRepeat>
                            <S.PlayerBtnShuffle>
                                <S.PlayerBtnShuffleSvg alt="shuffle">
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
                                            Ты та...
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
                                            Баста
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
                                    type="range"
                                    name="range"
                                />
                            </S.VolumeProgress>
                        </S.VolumeContent>
                    </S.BarVolumeBlock>
                </S.BarPlayerBlock>
            </S.BarContent>
        </S.Bar>
    )
}

export default AudioPlayer
