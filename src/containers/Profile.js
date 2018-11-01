import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions/index';

class Profile extends Component {
	componentWillMount() {
		this.props.getUserInfo();
		this.props.getProfilePhoto();
	}

	render() {
		return (
			<div style={{textAlign: 'center', margin: 20}}>
				<img src={this.props.url} alt="profilephoto" width="300"/>
				<div>
					<div>Name: {this.props.name}</div>
					<div>Email: {this.props.email}</div>
					<div>Phone: {this.props.phone}</div>
					<div>Website: {this.props.website}</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		url: state.profile.src,
		name: state.profile.name,
		email: state.profile.email,
		phone: state.profile.phone,
		website: state.profile.website
	}
}

const mapDispatchToProps = dispatch => {
	return {
		getProfilePhoto: () => dispatch(actions.getProfilePhoto()),
		getUserInfo: () => dispatch(actions.getUserInfo())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);