import _ from 'lodash'
import printMe from './print.js'

//RELEVANT NormalModuleReplacementPlugin -> plugin scans ALL imports/requires -> also applies for e.g. images!
import './welcome-PLATFORM_DEPENDENT.js'
import Icon from './morty-PLATFORM_DEPENDENT.jpg' //<- this is neat!

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


	//RELEVANT IFDEF -> this is how its used in our code:

	/// #if BUILD_ENV === 'dev'
	console.log("ifdef says: dev");
	/// #elif BUILD_ENV === 'prod'
	console.log("ifdef says: prod");
	/// #else
	console.log("ifdef not working...");
	/// #endif

	return element;
}

document.body.appendChild(component());
