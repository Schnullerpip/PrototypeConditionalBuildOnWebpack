# PrototypeConditionalBuildOnWebpack
Simple setup for conditional build (1 codebase -> n platforms) with webpack

The __webpack-config.js__ has targets for 'dev', 'prod' and 'build' to emulate different targets.
e.g.: 'npm run dev' or 'npm run prod' or 'npm run serveD' for dev-server in dev mode 'npm run serveP' (see package.json).
This will result in building different contexts (build defaults to dev).
There will be different console outputs and a different morty with each target.

The #ifdef-loader plugin can work splitting the codebase, however more reliable methods are NormalModuleReplacementPlugin, as well as webpack's define plugin

in src/ there are logger/ dogger/ and frogger/ directories which all try to implement conditional builds each using one of the technologies from above.
**Note**, that webpack's define plugin should be preferred, since it doesn't break whatever IDE you are using.
**However**, to enable webpacks treeshaking (dead code elimination) you also need to tell the package.json file, that either your applications modules are sideEffect free or [list the files that have sideEffects](https://webpack.js.org/guides/tree-shaking/#minify-the-output).
**Also**, in order to not break your IDE (static code analyses etc.) you need to globally declare any define you have made, for example in a 'global.d.ts' file.


If you have troubles with dependencies try executing the 'npm_installs.sh' so the neccessary npm packages are downloaded for you.


## Sources/Tutorials

The sources/tutorials for this setup can be found in the tutorials folder. just open the html files and you will be redirected to the sources accordingly.
(watch out tho! I had to slightly adjust the solution for ifdef-loader - see webpack.config.js)
