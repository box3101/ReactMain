import { combineReducers } from 'redux';
import * as types from './actionType';


const memberReducer = (state = { members: [] }, action) => {
	switch (action.type) {
		case types.MEMBERS.start:
			return state;

		case types.MEMBERS.success:
			return { ...state, members: action.payload }

		case types.MEMBERS.fail:
			return { ...state, members: action.payload }

		default:
			return state;
	}
}

const geobugReducer = (state = { geobug: [] }, action) => {
	switch (action.type) {
		case types.GEOBUG.start:
			return state;

		case types.GEOBUG.success:
			return { ...state, geobug: action.payload }

		case types.GEOBUG.fail:
			return { ...state, geobug: action.payload }

		default:
			return state;
	}
}

const youtubeReducer = (state = { youtube: [] }, action) => {
	switch (action.type) {
		case types.YOUTUBE.start:
			return state;

		case types.YOUTUBE.success:
			return { ...state, youtube: action.payload }

		case types.YOUTUBE.fail:
			return { ...state, youtube: action.payload }

		default:
			return state;
	}
}

const flickrReducer = (state = { flickr: [] }, action) => {
	switch (action.type) {
		case types.FLICKR.start:
			return state;

		case types.FLICKR.success:
			return { ...state, flickr: action.payload }

		case types.FLICKR.fail:
			return { ...state, flickr: action.payload }

		default:
			return state;
	}
}


const reducers = combineReducers({ memberReducer, geobugReducer, youtubeReducer, flickrReducer });

export default reducers;