import { FormControl, ValidationErrors, ValidatorFn, AbstractControl, FormGroup } from '@angular/forms';

export class CustomValidators {
    static notOnlyWhitespace(control: FormControl): ValidationErrors {

        if (control.value == null || (control.value.trim().length === 0)) {
            return {'notOnlyWhitespace': true }
        } else {
            return null;
        }
    }
    
    static exactLength(exactLength: number): ValidatorFn {
        return (control: AbstractControl): {[key: string] : boolean} | null => {
            if(control.value != null && control.value.length !== exactLength) {
                return {'exactLength': true}
            }
            return null;
        }
    }

    static exactTwoLengths(firstLength: number, secondLength: number): ValidatorFn {
        return (control: AbstractControl): {[key: string] : boolean} | null => {
            if(control.value != null && (control.value.length !== firstLength && control.value.length !== secondLength)) {
                return {'exactTwoLengths': true}
            }
            return null;
        }
    }
}

export function MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        // return null if controls haven't initialised yet
        if (!control || !matchingControl) {
          return null;
        }

        // return null if another validator has already found an error on the matchingControl
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            return null;
        }

        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}
