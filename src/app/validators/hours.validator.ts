import { AbstractControl, ValidatorFn } from '@angular/forms';
import * as _ from 'lodash';

export function HoursValidator(control: AbstractControl): { [key: string]: any } {
    let returnValue = null;
    if (control.value == null || control.value === '') {
        returnValue = { hours: true };
    }
    const a = control.value * 4;
    if (!Number.isInteger(a)) {
        returnValue = { hours: true };
    }
    if (!_.isInteger(a)) {
        returnValue = { hours: true };
    }
    return returnValue;
}
