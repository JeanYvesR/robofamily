import React, { Component } from 'react';
import './Hello.css';

/*const Hello = (props) => {
	return (		// this is JSX (below) -> virtual DOM
		<div className="f1 tc">
			<h1> Hellooooo World!</h1>
			<p> Welcome to React </p>
			<p>{props.greeting}</p>
		</div>
	);
}*/

class Hello extends Component{
	render(){
		return (		// this is JSX (below) -> virtual DOM
			<div className="f1 tc">
				<h1> Hellooooo World!</h1>
				<p> Welcome to React </p>
				<p>{this.props.greeting}</p>
			</div>
		);
	}
}

export default Hello;