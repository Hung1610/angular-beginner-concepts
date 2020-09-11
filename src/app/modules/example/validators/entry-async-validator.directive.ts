import { Directive, Injectable } from '@angular/core';
import { AsyncValidator, AbstractControl, ValidationErrors, NG_ASYNC_VALIDATORS } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { EntryService } from '../services/entry.service';

export function uniqueNameValidator(
  entryService: EntryService
) {
  return (ctrl: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    const name = ctrl.get('name');
    console.log(name.value);
    const result = entryService.isNameTaken(name.value).pipe(
      map(isTaken => (isTaken ? { uniqueName: true } : null)),
      catchError(() => of(null))
    );
    return result;
  }
}

@Directive({
  selector: '[appEntryAsyncValidator]',
  providers: [
    {provide: NG_ASYNC_VALIDATORS, useExisting: EntryAsyncValidatorDirective, multi:true}
  ]
})
@Injectable({
  providedIn: 'root'
})
export class EntryAsyncValidatorDirective implements AsyncValidator {

  constructor(
    private entryService: EntryService
  ) { }

  validate(
    ctrl: AbstractControl
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    const name = ctrl.get('name');
    console.log(name.value);
    const result = this.entryService.isNameTaken(name.value).pipe(
      map(isTaken => (isTaken ? { uniqueName: true } : null)),
      catchError(() => null)
    );
    return result;
  }

}
