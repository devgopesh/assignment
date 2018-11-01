import axios from 'axios';
import * as actionTypes from './actionTypes';

export const setPhoto = ( url ) => {
    return {
        type: actionTypes.SET_PHOTO,
        src: url
    };
};

export const userInfo = ( info ) => {
    return {
        type: actionTypes.USER_INFO,
        info: info
    };
};

export const getProfilePhoto = () => {
	return dispatch => {
		axios.get('photos/7')
			.then(res => {
				dispatch(setPhoto(res.data.url));
			});
	}
}

export const getUserInfo = () => {
	return dispatch => {
		axios.get('users/1')
			.then(res => {
				const info = {
					name: res.data.name,				
					email: res.data.email,					
					phone: res.data.phone,
					website: res.data.website					
				}			
				dispatch(userInfo(info));
			});
	}
}