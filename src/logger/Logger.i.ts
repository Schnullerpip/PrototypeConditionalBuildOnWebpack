//solution using NormalModuleReplacementPlugin

export interface iLogger {
    prefix():string
    log(msg:string):void
}

export declare class Logger implements iLogger{
    log(msg: string):void;

    prefix(): string;
}