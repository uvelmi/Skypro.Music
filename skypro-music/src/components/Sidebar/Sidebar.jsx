import * as S from './Sidebar.styles'

import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function SideBar({ isLoading }) {
    return (
        <S.MainSidebar>
            <S.SidebarPersonal>
                <S.SidebarPersonalName>Sergey.Ivanov</S.SidebarPersonalName>
                <S.SidebarIcon>
                    <svg alt="logout">
                        <use xlinkHref="img/icon/sprite.svg#logout"></use>
                    </svg>
                </S.SidebarIcon>
            </S.SidebarPersonal>
            <S.SidebarBlock>
                <S.SidebarList>
                    <S.SidebarItem>
                        {isLoading ? (
                            <Skeleton
                                width={250}
                                height={150}
                                baseColor="#202020"
                                highlightColor="#444"
                            />
                        ) : (
                            <S.SidebarLink href="#">
                                <S.SidebarImg
                                    src="img/playlist01.png"
                                    alt="day's playlist"
                                />
                            </S.SidebarLink>
                        )}
                    </S.SidebarItem>
                    <S.SidebarItem>
                        {isLoading ? (
                            <Skeleton
                                width={250}
                                height={150}
                                baseColor="#202020"
                                highlightColor="#444"
                            />
                        ) : (
                            <S.SidebarLink href="#">
                                <S.SidebarImg
                                    src="img/playlist02.png"
                                    alt="day's playlist"
                                />
                            </S.SidebarLink>
                        )}
                    </S.SidebarItem>
                    <S.SidebarItem>
                        {isLoading ? (
                            <Skeleton
                                width={250}
                                height={150}
                                baseColor="#202020"
                                highlightColor="#444"
                            />
                        ) : (
                            <S.SidebarLink href="#">
                                <S.SidebarImg
                                    src="img/playlist03.png"
                                    alt="day's playlist"
                                />
                            </S.SidebarLink>
                        )}
                    </S.SidebarItem>
                </S.SidebarList>
            </S.SidebarBlock>
        </S.MainSidebar>
    )
}

export default SideBar
