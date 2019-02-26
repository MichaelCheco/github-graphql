import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo-hooks';
import './App.css';
import apolloClient from './apolloClient';
import TokenForm from './TokenForm';
import StarredRepos from './StarredRepos';

class App extends Component {
	state = {
		token: null,
	};
	componentDidMount() {
		this.setState({ token: sessionStorage.getItem('token') });
	}
	setToken = token => {
		sessionStorage.setItem('token', token);
		this.setState({ token });
	};
	render() {
		const { token } = this.state;
		return (
			<div className="App">
				<ApolloProvider client={apolloClient}>
					{token ? <StarredRepos /> : <TokenForm setToken={this.setToken} />}
				</ApolloProvider>
			</div>
		);
	}
}

export default App;
