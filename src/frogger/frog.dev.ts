import {platformdependent} from "./frog.interface.ts";

export default class FrogDev implements platformdependent.iFrog {
    doFrogNoise(): void {
        console.log("[FROG]::'deev dev...'")
    }
}

