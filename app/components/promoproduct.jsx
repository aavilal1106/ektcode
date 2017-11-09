import React from 'react';
import AppActions from '../flux/actions/AppActions.jsx';
import AppStore from '../flux/stores/AppStore.jsx';
import io from 'socket.io-client';

//var socket = io.connect('http://localhost:3000');
var socket = io.connect('https://pushpromo-ekt.herokuapp.com/');

export default class PromoProduct extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			sku: '000000',
			precio: '$999.99',
			img: 'http://elektraqa.vteximg.com.br/arquivos/ids/161878-300-300/10002926.jpg?v=636379098239730000'
		};
		this.productRecieve = this.productRecieve.bind(this);
	}
	componentDidMount() {
		console.log('RJS');
		socket.on('receive:product', this.productRecieve);
	}
	productRecieve(product) {
		product = JSON.parse(product);
		this.setState({
			sku: product.sku,
			img: product.img,
			precio: product.precio
		});
		console.log(product.sku);
		dataLayer.push({
			event: 'promoproduct',
			value: {
				sku: product.sku,
				img: product.img,
				precio: product.precio
			}
		});
	}

	render() {
		/*
			<img src={this.state.img} />
			<br></br>
			<h1>{this.state.sku}</h1>
			<br></br>
			<h1>{this.state.precio}</h1>
			<br></br>
		*/
		return (
			<div id="promoproduct">
			</div>
		);
	}
}
