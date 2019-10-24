import {Logger} from "./logger/Logger.i.ts";
import {dog} from "./dogger/dog.interface.ts";
import {getFrog} from "./frogger/frog.interface.ts"

console.log("TS loader works!");

let logger = new Logger();

logger.log("HeeeeeyyydihoooOOOoooo");



dog.bark()

getFrog().doFrogNoise()
