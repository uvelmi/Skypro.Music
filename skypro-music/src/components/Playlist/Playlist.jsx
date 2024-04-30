import React, { useState, useEffect } from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import * as S from './Playlist.styles'



function PlayList() {
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 5000);
		return () => clearTimeout(timer);
	}, []);
  return (
		<S.SidebarBlock>
			<S.SidebarList>
				<S.SidebarItem>{isLoading ? <Skeleton  width={250} height={150} baseColor='#202020' highlightColor='#444'/> : 
					<S.SidebarLink href="#">
						<S.SidebarImg
							src="img/playlist01.png"
							alt="day's playlist"
						/>
					</S.SidebarLink>}
				</S.SidebarItem>
				<S.SidebarItem>{isLoading ? <Skeleton  width={250} height={150} baseColor='#202020' highlightColor='#444'/> : 
					<S.SidebarLink href="#">
						<S.SidebarImg
							src="img/playlist02.png"
							alt="day's playlist"
						/>
					</S.SidebarLink>}
				</S.SidebarItem>
				<S.SidebarItem>{isLoading ? <Skeleton  width={250} height={150} baseColor='#202020' highlightColor='#444'/> : 
					<S.SidebarLink  href="#">
						<S.SidebarImg
							src="img/playlist03.png"
							alt="day's playlist"
						/>
					</S.SidebarLink>}
				</S.SidebarItem>
			</S.SidebarList>
		</S.SidebarBlock>
	);
}

export default PlayList;