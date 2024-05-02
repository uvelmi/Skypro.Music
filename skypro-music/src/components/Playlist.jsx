import React, { useState, useEffect } from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


function PlayList({ isLoading }) {
	
  return (
		<div className="sidebar__block">
			<div className="sidebar__list">
				<div className="sidebar__item">{isLoading ? <Skeleton  width={250} height={150} baseColor='#202020' highlightColor='#444'/> : 
					<a className="sidebar__link" href="#">
						<img
							className="sidebar__img"
							src="img/playlist01.png"
							alt="day's playlist"
						/>
					</a>}
				</div>
				<div className="sidebar__item">{isLoading ? <Skeleton  width={250} height={150} baseColor='#202020' highlightColor='#444'/> : 
					<a className="sidebar__link" href="#">
						<img
							className="sidebar__img"
							src="img/playlist02.png"
							alt="day's playlist"
						/>
					</a>}
				</div>
				<div className="sidebar__item">{isLoading ? <Skeleton  width={250} height={150} baseColor='#202020' highlightColor='#444'/> : 
					<a className="sidebar__link" href="#">
						<img
							className="sidebar__img"
							src="img/playlist03.png"
							alt="day's playlist"
						/>
					</a>}
				</div>
			</div>
		</div>
	);
}

export default PlayList;