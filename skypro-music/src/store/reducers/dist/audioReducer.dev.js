"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.trackReducer = exports.getPauseTrack = exports.getPlayTrack = exports.setPlayTracks = exports.setShuffleTracks = exports.setCurrentTracks = exports.setNewTracks = void 0;

var _toolkit = require("@reduxjs/toolkit");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var trackSlice = (0, _toolkit.createSlice)({
  name: 'track',
  initialState: {
    playTrack: false,
    newPlaylist: [],
    trackId: null,
    currentTrack: null,
    shufflePlaylist: [],
    $isPlaying: false,
    isShuffle: false
  },
  reducers: {
    setNewTracks: function setNewTracks(state, action) {
      state.newPlaylist = action.payload;
    },
    getPlayTrack: function getPlayTrack(state) {
      state.$isPlaying = true;
    },
    getPauseTrack: function getPauseTrack(state) {
      state.$isPlaying = false;
    },
    setPlayTracks: function setPlayTracks(state, action) {
      state.playTrack = action.payload;
    },
    setCurrentTracks: function setCurrentTracks(state, action) {
      var id = action.payload;
      var toggledTrack = Object.values(state.newPlaylist).find(function (item) {
        return item.id === id;
      });

      if (toggledTrack) {
        var audio = document.getElementById('audio-player'); //audio.src = toggledTrack?.track_file
        //audio.play()
      }

      state.playTrack = true;
      state.trackId = _objectSpread({}, toggledTrack);
    },
    setShuffleTracks: function setShuffleTracks(state, action) {
      var id = action.payload;
      var shuffleTrack = Object.values(state.newPlaylist).find(function (item) {
        return item.id === id;
      });
      state.shufflePlaylist = _objectSpread({}, shuffleTrack);
    }
  }
});
var _trackSlice$actions = trackSlice.actions,
    setNewTracks = _trackSlice$actions.setNewTracks,
    setCurrentTracks = _trackSlice$actions.setCurrentTracks,
    setShuffleTracks = _trackSlice$actions.setShuffleTracks,
    setPlayTracks = _trackSlice$actions.setPlayTracks,
    getPlayTrack = _trackSlice$actions.getPlayTrack,
    getPauseTrack = _trackSlice$actions.getPauseTrack;
exports.getPauseTrack = getPauseTrack;
exports.getPlayTrack = getPlayTrack;
exports.setPlayTracks = setPlayTracks;
exports.setShuffleTracks = setShuffleTracks;
exports.setCurrentTracks = setCurrentTracks;
exports.setNewTracks = setNewTracks;
var trackReducer = trackSlice.reducer; // import { createSlice } from '@reduxjs/toolkit';
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

exports.trackReducer = trackReducer;