# PrototypeConditionalBuildOnWebpack
Simple setup for conditional build (1 codebase -> n platforms) with webpack, aiming to eliminate platformspecific dead code in order to reduce resulting bundle-sizes.

The __webpack-config.js__ has targets for 'dev', 'prod' and 'build' to emulate different targets.
e.g.: 'npm run dev' or 'npm run prod' or 'npm run serveD' for dev-server in dev mode 'npm run serveP' (see package.json).
This will result in building different contexts (build defaults to dev).
There will be different console outputs and a different morty with each target.

The [#ifdef-loader plugin](https://github.com/nippur72/ifdef-loader) can work splitting the codebase, however when working with vue components i found the [NormalModuleReplacementPlugin](https://webpack.js.org/plugins/normal-module-replacement-plugin/), as well as [webpack's define plugin](https://webpack.js.org/plugins/define-plugin/) to work more reliably and out of the box. 

in src/ there are logger/ dogger/ and frogger/ directories which all try to implement conditional builds each using one of the technologies from above.
**Note**, that webpack's define plugin should be preferred, since it doesn't break whatever IDE you are using.
**However**, to enable webpacks treeshaking (dead code elimination) you also need to tell the package.json file, that either your applications modules are sideEffect free or [list the files that have sideEffects](https://webpack.js.org/guides/tree-shaking).
**Also**, in order to not break your IDE (static code analyses etc.) you need to globally declare any define you have made, for example in a 'global.d.ts' file.

in src/ there is a LoginScreen.vue that is supposed to react differently to a dev/prod build. 
In my tests I concluded, that only with NormalModuleReplacement, as well as webpack's define plugin I could achieve not bundling unneccessary vue-components into the final build.

If you have troubles with dependencies try executing the 'npm_installs.sh' so the neccessary npm packages are downloaded for you.


## Sources/Tutorials

The sources/tutorials for this setup can be found in the tutorials folder. just open the html files and you will be redirected to the sources accordingly.
(watch out tho! I had to slightly adjust the solution for ifdef-loader - see webpack.config.js)
