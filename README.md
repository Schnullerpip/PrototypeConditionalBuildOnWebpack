# PrototypeConditionalBuildOnWebpack
Simple setup for conditional build (1 codebase -> n platforms) with webpack

The __webpack-config.js__ has targets for 'dev', 'prod' and 'build' to emulate different targets.
e.g.: 'npm run dev' or 'npm run prod'
This will result in building different contexts (build defaults to def).
There will be different console outputs and a different morty with each target.


If you have troubles with dependencies try executing the 'npm_installs.sh' so the neccessary npm packages are downloaded for you.


## Sources/Tutorials

The sources/tutorials for this setup can be found in the tutorials folder. just open the html files and you will be redirected to the sources accordingly.
(watch out tho! I had to slightly adjust the solution for ifdef-loader - see webpack.config.js)
