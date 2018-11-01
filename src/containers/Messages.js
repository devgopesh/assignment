import React, { Component } from 'react';
import '../stylesheets/Messages.css'

class Messages extends Component {
	state = {
		messages: [
			{
				id: null,
				message: ""
			}
		],
		value1: "",
		value2: ""
	}

	onMessageChange1 = (event) => {
		this.setState({value1: event.target.value})
	}

	onMessageChange2 = (event) => {
		this.setState({value2: event.target.value})
	}

	onMessageSendBy1 = (e) => {
		e.preventDefault();
		const messages = this.state.messages;
		messages.push({
			id: 1,
			message: this.state.value1
		});
		this.setState({messages: messages, value1: ""})
	}

	onMessageSendBy2 = (e) => {
		e.preventDefault();
		const messages = this.state.messages;
		messages.push({
			id: 2,
			message: this.state.value2
		});
		this.setState({messages: messages, value2: ""})
	}

	render() {
		let align = null;
		const messages1 = this.state.messages.map(message => {
			if (message.id == 1) {
				align = 'right';
			} else {
				align = 'left';				
			}
			return (
				<div style={{textAlign: align}}>
					<p>{message.message}</p>
				</div>
			);
		});	

		const messages2 = this.state.messages.map(message => {
			if (message.id == 2) {
				align = 'right';
			} else {
				align = 'left';
			}
			return (
				<div style={{textAlign: align}}>
					<p>{message.message}</p>
				</div>
			);
		});	
	

		return (
			<div>
				<div className="messages">
					<div className="block1">
						{messages1}
					</div>
					<form onSubmit={this.onMessageSendBy1}>
						<input placeholder="Type Your Message" type="text" name="messages" onChange={this.onMessageChange1} value={this.state.value1}/>
						<button>Send</button>	
					</form>									
				</div>
				
				<div className="messages">
					<div className="block2">
						{messages2}
					</div>
					<form onSubmit={this.onMessageSendBy2}>
						<input placeholder="Type Your Message" type="text" name="messages" onChange={this.onMessageChange2} value={this.state.value2}/>
						<button>Send</button>	
					</form>													
				</div>
			</div>
		);
	}
}

export default Messages;