import { AbstractControl } from "@angular/forms";

export function passwordValidator(control:AbstractControl) {
    // const forbidden = /admin/.test(control.value)
    const password = control.get('password')?.value
    const confirmPassword = control.get('confirmPassword')?.value
    
    return password && confirmPassword && password !== confirmPassword ? {misMatch:true} : null
}