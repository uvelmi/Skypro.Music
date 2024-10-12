import { type } from '@testing-library/user-event/dist/type'
import {
	CURRENT_TRACK,
	NEW_TRACK,
	NEXT_TRACK,
	PREV_TRACK,
	SHUFFLE_TRACK,
} from '../audoActions'

export const newTrack = ({ track}) => ({
	type: NEW_TRACK,
	payload: { track },
});

export const nextTrack = (id) => ({
	type: NEXT_TRACK,
	payload: { id },
})

export const prevTrack = (id) => ({
	type: PREV_TRACK,
	payload: { id },
})

export const shuffleTrack = (playlists) => ({
	type: SHUFFLE_TRACK,
	payload: { playlists },
})
export const currentTrack = (id) => ({
	type: CURRENT_TRACK,
	payload: { id },
})