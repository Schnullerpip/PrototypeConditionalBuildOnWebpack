# PrototypeConditionalBuildOnWebpack
Simple setup for conditional build (1 codebase -> n platforms) with webpack

execute the npm_installs.sh do the neccessary npm packages are downloaded
the __webpack-config.js__ has targets for 'dev', 'prod' and 'build' to emulate different targets.
This will result in building different contexts (build defaults to def).

There will be different console outputs and a different morty with each target.
