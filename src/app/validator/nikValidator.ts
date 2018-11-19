import { ValidatorFn, AbstractControl } from "@angular/forms";

export function nikValidator(gender: string, bornDate:string): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    const nik = control.value;
    if (nik.length >= 8) {
      let noGender = ""
      if (nik.slice(6, 8) < "40") {
        noGender = "male"
      } else {
        noGender = "female"
      }
      if (noGender != gender) {
        return { 'validGender': true}
      }
    }
    if (nik.length >= 12) {
      const born = nik.slice(6, 12)
      const date = bornDate.split('-')
      var newDate = date.map(function(value, index){
        if (value.length == 4) {
          return value.slice(2, 4)
        } else {
          return value
        }
      })
      if (born != newDate.reverse().join('')) {
        return { 'validBorn': true}
      }
    }
    return null;
  };
}