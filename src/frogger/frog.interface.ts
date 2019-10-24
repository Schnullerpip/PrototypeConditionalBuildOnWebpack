//solution using webpack.define plugin

import FrogDev from "./frog.dev.ts";
import FrogProd from "./frog.prod.ts";

export namespace platformdependent {
    export interface iFrog {
        doFrogNoise(): void
    }
}

export let frog:platformdependent.iFrog = ENV === 'dev' ? new FrogDev() : new FrogProd();

export const getFrog = () => {return ENV === 'dev' ? new FrogDev() : new FrogProd()};


