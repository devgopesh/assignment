import axios from 'axios';
import * as actionTypes from './actionTypes';

export const posts = (posts) => {
	return {
		type: actionTypes.FETCH_POSTS,
		posts: posts
	}
}

export const images = (images) => {
	return {
		type: actionTypes.FETCH_IMAGES,
		images: images
	}
}

export const fetchPosts = () => {
	return dispatch => {
		axios.get('posts?userId=1')
			.then(res => {
				dispatch(posts(res.data));				
			})
	}
}

export const fetchImages = () => {
	return dispatch => {
		axios.get('photos')
			.then(res => {
				dispatch(images(res.data));				
			})
	}
}