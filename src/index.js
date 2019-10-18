import _ from 'lodash'
import printMe from './print.js'
import './welcome-PLATFORM_DEPENDENT.js'
import Icon from './morty-PLATFORM_DEPENDENT.jpg'

function component(){
	const element = document.createElement('div');
	const btn = document.createElement('button');

	element.innerHTML = _.join(['Hello', 'webpack'], ' ');

	btn.innerHTML = "Click me and check the console!";
	btn.onclick = printMe;

	element.appendChild(btn);



	//include morty img
	const img = new Image();
	img.src = Icon;
	element.appendChild(img);

	return element;
}

document.body.appendChild(component());
