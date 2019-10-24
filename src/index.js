import _ from 'lodash'
import Vue from 'vue';
import LoginScreen from './LoginScreen.vue'

new Vue({
	el: '#app',
	components: {
	    'login-screen': LoginScreen
	},
	template: '<login-screen/>'
});

//RELEVANT NormalModuleReplacementPlugin -> plugin scans ALL imports/requires -> also applies to e.g. images!
//NOTE that this introduces import paths, that the IDE or other static code analysis tools do NOT recognize or know how
//to handle -> the logger/Logger.i.ts demonstrates, how this can be 'solved' through an interface BUT it is NOT and without
//a proper IDE plugin can't be a perfect solution
import './welcome-PLATFORM_DEPENDENT.js'
import Icon from './morty-PLATFORM_DEPENDENT.jpg' //<- this is neat!

document.body.appendChild((() => {
	const element = document.createElement('div');

	//include morty img
	const img = new Image();
	img.src = Icon;
	element.appendChild(img);

	//RELEVANT IFDEF -> this is how its used in our code:
    //NOTE that this doesn't prevent the IDE/static code analyzers to see e.g. multiple variable definitions
	//in the end this is limited in its usefulness as long as we don't want to break our IDE

	/// #if BUILD_ENV === 'dev'
	console.log("ifdef says: dev");
	/// #elif BUILD_ENV === 'prod'
	console.log("ifdef says: prod");
	/// #else
	console.log("ifdef not working...");
	/// #endif

	return element;
})())

