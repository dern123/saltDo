import {
    AbstractControl
  } from '@angular/forms';
  
//   export function CustomValidators(controlName: string, matchingControlName: string){
//     return (formGroup: FormGroup) => {
//         const control = formGroup.controls[controlName];
//         const matchingControl = formGroup.controls[matchingControlName];
//         if (matchingControl.errors && !matchingControl.errors['customValidators']) {
//             return;
//         }
//         if (control.value !== matchingControl.value) {
//             matchingControl.setErrors({ confirmedValidator: true });
//         } else {
//             matchingControl.setErrors(null);
//         }
//     }
// }
  export function CustomValidators(control: AbstractControl): { [key: string]: boolean} | null {
  const password = control.get('password');
  const passwordRepeat = control.get('passwordRepeat');

  if (password && passwordRepeat && password.value !== passwordRepeat.value) {
    return { 'passwordMismatch': true };
  }

  return null;
}  