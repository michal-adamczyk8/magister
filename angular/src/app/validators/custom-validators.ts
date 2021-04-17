import { FormControl, ValidationErrors, ValidatorFn, AbstractControl } from '@angular/forms';

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
