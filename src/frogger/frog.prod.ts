import {platformdependent} from "./frog.interface.ts";

export default class FrogProd implements platformdependent.iFrog {
    doFrogNoise(): void {
        console.log("[FROG]::'proooooooood'")
    }
}
