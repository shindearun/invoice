import { Directive } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { PhoneValidator } from './phone.validator';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[phone][ngModel]',
  providers: [{ provide: NG_VALIDATORS, useExisting: PhoneDirective, multi: true }]
})
export class PhoneDirective implements Validator {

  private validator = PhoneValidator();

  validate(control: AbstractControl): { [key: string]: any } {
    return this.validator(control);
  }
}
