import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import * as actions from '../store/actions/index';
import Post from '../components/Post'

class Posts extends Component {
	componentDidMount() {
			this.props.fetchPosts();
			this.props.fetchImages();
	}

	render() {
		let allpost = null;
		if (this.props.posts && this.props.images) {
			allpost = this.props.posts.map(post => (
				<Post title={post.title} body={post.body} src={this.props.images[post.id].url} key={post.id} /> 
			));	
		}

		return (
			<div>
				{allpost}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		posts: state.posts.posts,
		images: state.posts.images
	}
}

const mapDispatchToProps = dispatch => {
	return {
		fetchPosts: () => dispatch(actions.fetchPosts()),
		fetchImages: () => dispatch(actions.fetchImages())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);