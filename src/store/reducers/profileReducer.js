import * as actionTypes from '../actions/actionTypes';

const initialState = {
    src: null,
    name: null,
    email: null,
    phone: null
};

const reducer = (state = initialState, action) => {
	switch ( action.type ) {
		case actionTypes.SET_PHOTO:
			return {
				...state,
				src: action.src
			}
		case actionTypes.USER_INFO:
			return {
				...state,
				name: action.info.name,
				email: action.info.email,				
				phone: action.info.phone,
				website: action.info.website
			}
		default:
			return {
				state
			}
	}
}

export default reducer;