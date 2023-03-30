import { AbstractControl } from "@angular/forms";

export function noNegativeNumber(control:AbstractControl) {
    return control.value < 0 ? {negativeNumber:true} : null
}

