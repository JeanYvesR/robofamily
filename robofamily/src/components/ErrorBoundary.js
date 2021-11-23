import React, { Component } from 'react';

class ErrorBoundary extends Component{
	constructor(props){
		super(props);
		this.state={
			hasError:false
		};
	};

	componentDidCatch(error, info){
		this.setState({hasError: true});
	};

	render(){
		if (this.state.hasError){
			return (<h1>"Oops...Something went terribly and we have no idea whatsoever about what it might be!"</h1>);
		};
		return this.props.children;
	};
}
export default ErrorBoundary;