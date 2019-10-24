import {platformdependent} from "./dog.interface.ts";
import iDog = platformdependent.iDog;

export class DogDev implements iDog {
    bark(): void {
        console.log("[DOG]::'Im a dev-dog. I am developing, DAWG!'")
    }
}