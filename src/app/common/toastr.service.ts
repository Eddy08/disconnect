import { Injectable } from "@angular/core"
declare let toastr:any
@Injectable()
export class ToastrService {
    success(message: string, text?: string) {
        toastr.success(message, text);
    }
    info(message: string, text?: string) {
        toastr.info(message, text);
    }
    warning(message: string, text?: string) {
        toastr.warning(message, text);
    }
    error(message: string, text?: string) {
        toastr.error(message, text);
    }
}