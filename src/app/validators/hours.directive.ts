import { Directive } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { HoursValidator } from './hours.validator';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[hours][ngModel]',
  providers: [{ provide: NG_VALIDATORS, useExisting: HoursDirective, multi: true }]
})
export class HoursDirective implements Validator {
  private validator = HoursValidator;

  validate(control: AbstractControl): { [key: string]: any } {
    return this.validator(control);
  }
}
