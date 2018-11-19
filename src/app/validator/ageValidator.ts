import { ValidatorFn, AbstractControl } from "@angular/forms";

export function ageRangeValidator(max: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    const year = (control.value).split('-')[0];
    const currentDate = new Date().getFullYear();
    const age = currentDate - year;
    if (!control.value) {
      return { 'ageRange': false}
    } else if (age > max) {
      return { 'ageRange': true}
    }
    return null;
  };
}