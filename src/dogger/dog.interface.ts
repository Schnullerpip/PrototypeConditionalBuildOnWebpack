//Solution using #ifdef-loader

import {DogProd} from "./dog.prod.ts";
import {DogDev} from "./dog.dev.ts";

export namespace platformdependent {
    export interface iDog {
        bark(): void
    }
}

export let dog:platformdependent.iDog = (function(){

    /// #if BUILD_ENV === 'dev'
    return new DogDev()
    /// #else
    return new DogProd()
    /// #endif
})()
