import * as actionTypes from '../actions/actionTypes';

const initialState = {
    posts: [],
    images: []
};

const reducer = (state = initialState, action) => {
	switch ( action.type ) {
		case actionTypes.FETCH_POSTS:
			return {
				...state,
				posts: action.posts
			}
		case actionTypes.FETCH_IMAGES:
			return {
				...state,
				images: action.images
			}
		default:
			return {
				state
			}
	}
}

export default reducer;