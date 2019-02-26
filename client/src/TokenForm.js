import React, { Component } from 'react';
import { Input } from '@progress/kendo-react-inputs';

export default class TokenForm extends Component {
	handleSubmit = e => {
		e.preventDefault();
		const { setToken } = this.props;
		const token = this.tokenInput.value;
		if (token) {
			setToken(token);
		}
	};
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<Input
					name="token"
					placeholder="Enter your GitHub token"
					ref={input => {
						this.tokenInput = input;
					}}
				/>
			</form>
		);
	}
}
