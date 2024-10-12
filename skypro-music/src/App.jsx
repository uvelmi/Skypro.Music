import * as S from './App.styles'
import React, { useState, useEffect } from 'react'
import { GlobalStyle } from './GlobalStyles'
import { AppRoutes } from './Routes'
import { getTracks } from './api'
import { AuthContext } from './context/authContext'
import { useDispatch, useSelector } from 'react-redux'
import { setNewTracks } from './store/reducers/audioReducer'
function App() {
	const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true)
    const [tracks, setTracks] = useState([])
    const [errorTrack, setErrorTrack] = useState(null)
    const [userData, setUserData] = useState(
        JSON.parse(localStorage.getItem('user')) ?? 'Не авторизован'
    )
		const [playlist, setIsPlaylist] = useState('')
    useEffect(() => {
        const getAllTracks = async () => {
            try {
                setIsLoading(true)
                const tracks = await getTracks()
                console.log(tracks)
                setTracks(tracks)
								dispatch(setNewTracks(tracks))
            } catch (error) {
                setErrorTrack(
                    'Не удалось загрузить плейлист, попробуйте позже: ' +
                        error.message
                )
                setTracks([])
            } finally {
                setIsLoading(false)
            }
        }
        getAllTracks()
    }, [dispatch])
    const [currentTrack, setCurrentTrack] = useState(null)
    return (
        <AuthContext.Provider value={[userData, setUserData]}>
            <S.Wrapper>
                <AppRoutes
                    isLoading={isLoading}
                    setIsLoading={setIsLoading}
                    // currentTrack={currentTrack}
                    setCurrentTrack={setCurrentTrack}
                    user={localStorage.getItem('user')}
                    tracks={tracks}
                    setTracks={setTracks}
                    errorTrack={errorTrack}
                    setErrorTrack={setErrorTrack}
										setIsPlaylist={setIsPlaylist}
										playlist={playlist}
                />
                <GlobalStyle />
            </S.Wrapper>
        </AuthContext.Provider>
    )
}

export default App


// import * as S from './App.styles'
// import React, { useState, useEffect } from 'react'
// import { GlobalStyle } from './GlobalStyles'
// import { AppRoutes } from './Routes'
// import { getTracks } from './api'
// import { AuthContext } from './context/authContext'
// import { useDispatch, useSelector } from 'react-redux'
// function App() {
// 	const dispatch = useDispatch();
//     const [isLoading, setIsLoading] = useState(true)
//     const [tracks, setTracks] = useState([])
//     const [errorTrack, setErrorTrack] = useState(null)
//     const [userData, setUserData] = useState(
//         JSON.parse(localStorage.getItem('user')) ?? 'Не авторизован'
//     )
// 		const [playlist, setIsPlaylist] = useState('')
//     useEffect(() => {
//         const getAllTracks = async () => {
//             try {
//                 setIsLoading(true)
//                 const tracks = await getTracks()
//                 console.log(tracks)
//                 setTracks(tracks)
//             } catch (error) {
//                 setErrorTrack(
//                     'Не удалось загрузить плейлист, попробуйте позже: ' +
//                         error.message
//                 )
//                 setTracks([])
//             } finally {
//                 setIsLoading(false)
//             }
//         }
//         getAllTracks()
//     }, [dispatch])
//     const [currentTrack, setCurrentTrack] = useState(null)
//     return (
//         <AuthContext.Provider value={[userData, setUserData]}>
//             <S.Wrapper>
//                 <AppRoutes
//                     isLoading={isLoading}
//                     setIsLoading={setIsLoading}
//                     currentTrack={currentTrack}
//                     setCurrentTrack={setCurrentTrack}
//                     user={localStorage.getItem('user')}
//                     tracks={tracks}
//                     setTracks={setTracks}
//                     errorTrack={errorTrack}
//                     setErrorTrack={setErrorTrack}
// 										setIsPlaylist={setIsPlaylist}
// 										playlist={playlist}
//                 />
//                 <GlobalStyle />
//             </S.Wrapper>
//         </AuthContext.Provider>
//     )
// }

// export default App
