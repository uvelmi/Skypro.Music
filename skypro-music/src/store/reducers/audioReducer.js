import { createSlice } from '@reduxjs/toolkit'

const trackSlice = createSlice({
    name: 'track',
    initialState: {
        playTrack: false,
        newPlaylist: [],
        trackId: null,
        currentTrack: null,
        shufflePlaylist: [],
        $isPlaying: false,
        isShuffle: false,
    },
    reducers: {
        setNewTracks: (state, action) => {
            state.newPlaylist = action.payload
        },
        getPlayTrack: (state) => {
            state.$isPlaying = true
        },
        getPauseTrack: (state) => {
            state.$isPlaying = false
        },
        setPlayTracks: (state, action) => {
            state.playTrack = action.payload
        },
        setCurrentTracks: (state, action) => {
            const id = action.payload
            const toggledTrack = Object.values(state.newPlaylist).find(
                (item) => item.id === id
            )

            if (toggledTrack) {
                const audio = document.getElementById('audio-player')
                if (audio) {
                    audio.pause()
                    //audio.currentTime = 0
                    audio.src = toggledTrack?.track_file
                    console.log(toggledTrack?.track_file)
                    audio.load()

                    setTimeout(() => {
                        audio.play()
                    }, 20)
                }
            }

            state.playTrack = true
            state.trackId = { ...toggledTrack }
        },
        setShuffleTracks: (state, action) => {
            const id = action.payload

            const shuffleTrack = Object.values(state.newPlaylist).find(
                (item) => item.id === id
            )
            state.shufflePlaylist = { ...shuffleTrack }
        },
    },
})

export const {
    setNewTracks,
    setCurrentTracks,
    setShuffleTracks,
    setPlayTracks,
    getPlayTrack,
    getPauseTrack,
} = trackSlice.actions
export const trackReducer = trackSlice.reducer

// import { createSlice } from '@reduxjs/toolkit';

// const trackSlice = createSlice({
//   name: 'track',
//   initialState: {
// 		playTrack: false,
// 		newPlaylist: [],
// 		trackId: null,
// 		shufflePlaylist: [],
//   },
//   reducers: {
// 		setNewTracks: (state, action) => {
//       state.newPlaylist = action.payload;
//     },
//     setPlayTracks: (state, action) => {
//       state.playTrack = action.payload;
//     },
//     setCurrentTracks: (state, action) => {
//       const id = action.payload;
//       const toggledTrack = Object.values(state.newPlaylist).find(
//         (item) => item.id === id
//       );
//       state.playTrack = true;
//       state.trackId = { ...toggledTrack };
//     },
//     setShuffleTracks: (state, action) => {
//       const id = action.payload;
//       const shuffleTrack = Object.values(state.newPlaylist).find(
//         (item) => item.id === id
//       );
//       state.shufflePlaylist = { ...shuffleTrack };
//     },
//   },
// });

// export const {
//   setNewTracks,
//   setCurrentTracks,
//   setShuffleTracks,
//   setPlayTracks,
// } = trackSlice.actions;
// export const trackReducer = trackSlice.reducer

// import { createSlice } from '@reduxjs/toolkit';

// const trackSlice = createSlice({
//   name: 'track',
//   initialState: {
//     newPlaylist: [],
//     shufflePlaylist: [],
// 		trackId: null,
//     playTrack: false,
//   },
//   reducers: {
// 		  setNewTracks(state, action) {
//       state.newPlaylist = action.payload;
//     },

// 		setPlayTracks: (state, action) => {
// 			state.playTrack = action.payload
// 		},
// 		setCurrentTracks: (state, action) => {
// 			const id = action.payload;
// 			const toggledTrack = Object.values(state.newPlaylist).find((item) => item.id === id)
// 			state.playTrack = true;
// 			state.trackId = { ...toggledTrack}
// 		},
//     setShuffleTracks: (state, action) => {
// 			const id = action.payload;
// 			const shuffledTrack = Object.values(state.newPlaylist).find((item) => item.id === id)
// 			state.shufflePlaylist = { ...shuffledTrack}
//     },
//   },
// });
// export const {
//   setNewTracks, setCurrentTracks, setShuffleTracks, setPlayTracks,
// } = trackSlice.actions;
// export const trackReducer = trackSlice.reducer
