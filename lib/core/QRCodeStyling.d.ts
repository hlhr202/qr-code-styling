import QRCanvas from "./QRCanvas";
import { Options, RequiredOptions } from "./QROptions";
import { Extension, QRCode } from "../types";
declare type DownloadOptions = {
    name?: string;
    extension?: Extension;
};
export default class QRCodeStyling {
    _options: RequiredOptions;
    _container?: HTMLElement;
    _canvas?: QRCanvas;
    _qr?: QRCode;
    _drawingPromise?: Promise<void>;
    constructor(options?: Partial<Options>);
    static _clearContainer(container?: HTMLElement): void;
    update(options?: Partial<Options>): void;
    append(container?: HTMLElement): void;
    download(downloadOptions?: Partial<DownloadOptions> | string): void;
}
export {};
