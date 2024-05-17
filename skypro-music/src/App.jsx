import * as S from './App.styles'
import React, { useState, useEffect } from 'react'
import { GlobalStyle } from './GlobalStyles'
import { AppRoutes } from './Routes'
import { getTracks } from './api'

import Cookies from 'js-cookie'

// import Skeleton from 'react-loading-skeleton'
// import 'react-loading-skeleton/dist/skeleton.css'


function App() {
    const user = Cookies.get('user', '1234');

	const [isLoading, setIsLoading] = useState(true)
	const [tracks, setTracks] = useState([])
	const [errorTrack, setErrorTrack] = useState(null)

	useEffect(() => {
		const getAllTracks = async () => {
			try {
				setIsLoading(true);
				const tracks = await getTracks();
				console.log(tracks);
				setTracks(tracks);
			} catch (error) {
				setErrorTrack(
					'Не удалось загрузить плейлист, попробуйте позже: ' + error.message
				);
				setTracks([]);
			} finally {
				setIsLoading(false);
			}
		};
	
		getAllTracks();
	}, []);



	const [currentTrack, setCurrentTrack] = useState(null);
	
    return (
        <S.Wrapper>
            <AppRoutes  isLoading={isLoading} setIsLoading={setIsLoading} currentTrack={currentTrack} setCurrentTrack={setCurrentTrack} user={user} tracks={tracks} setTracks={setTracks} errorTrack={errorTrack} setErrorTrack={setErrorTrack}/>
            <GlobalStyle />
        </S.Wrapper>
    )
}

export default App
