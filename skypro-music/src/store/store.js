import { configureStore } from '@reduxjs/toolkit'
import {trackReducer} from './reducers/audioReducer'
import { thunk } from 'redux-thunk'

export default configureStore({
	reducer: { track: trackReducer,
	},
	// middleware: [thunk],
})