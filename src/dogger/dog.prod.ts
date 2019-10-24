import {platformdependent} from "./dog.interface.ts";
import iDog = platformdependent.iDog;

export class DogProd implements iDog{
    bark(): void {
        console.log("[DOG]::'Im a prod-dog. I am pro dog!'")
    }
}