
import React, { useState, useEffect } from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const TrackList = ({ Tracks }) => {
	const [isLoading, setLoading] = useState(true);

			useEffect(() => {
				const timer = setTimeout(() => {
					setLoading(false);
				}, 5000);
				return () => clearTimeout(timer);
			}, []);

  return (
    <div className="content__playlist playlist">
      {Tracks.map((track, index) => (
        <div key={index} className="playlist__item">
          <div className="playlist__track track">
            <div className="track__title">
              <div className="track__title-image">{isLoading ? <Skeleton  width={50} height={50} baseColor='#202020' highlightColor='#444'/> : 
                <svg className="track__title-svg" alt="music"><use xlinkHref={track.icon}></use></svg>}
              </div>
              <div className="track__title-text">{isLoading ? <Skeleton width={300} baseColor='#202020' highlightColor='#444'/> : 
                <a className="track__title-link" href="http://">{track.title} <span className="track__title-span">{track.trackSpan}</span></a>}
              </div>
            </div>
            <div className="track__author">{isLoading ? <Skeleton width={250} baseColor='#202020' highlightColor='#444'/> : 
              <a className="track__author-link" href="http://">{track.author}</a>}
            </div>
            <div className="track__album">{isLoading ? <Skeleton width={317} baseColor='#202020' highlightColor='#444'/> : 
              <a className="track__album-link" href="http://">{track.album}</a>}
            </div>
            <div className="track__time">
              <svg className="track__time-svg" alt="time"><use xlinkHref={track.iconTime}></use></svg><span className="track__time-text">{track.time}</span>
						</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TrackList;