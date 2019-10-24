import {iLogger} from "./Logger.i.ts";

export class Logger implements iLogger {

    log(msg: string) {
        console.log(this.prefix() + msg)
    }

    prefix(): string {
        return "[LOG]::[DEV]::";
    }
}