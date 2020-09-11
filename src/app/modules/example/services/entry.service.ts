import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Entry } from '../models/entry';
import { ENTRIES } from '../models/mock-entries';

@Injectable({
  providedIn: 'root'
})
export class EntryService {

  //Realistically, these service functions should make HTTP requests to backend server and return observable/promise.
  //Currently, only using mock objects.

  getAll(): Observable<Entry[]> {
    return of(ENTRIES);
  }

  add(entry: Entry) {
    ENTRIES.push(entry);
  }

  isNameTaken(name: string): Observable<boolean> {
    for(var i = 0; i < ENTRIES.length; i++) {
      if (ENTRIES[i].name === name) {
        return of(true);
      }
    }
    return of(null);
  }

  constructor() { }
}
