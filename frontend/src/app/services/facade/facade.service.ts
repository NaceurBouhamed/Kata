import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  selectedNumber,
  message,
  errorMsg,
  loading
} from '../../store/number/selectors';

import { sendNumber, flushMsg} from '../../store/number/actions';

@Injectable({
  providedIn: 'root',
})
export class FacadeService {

  constructor(private readonly store: Store) {}

  number$ = this.store.select(selectedNumber);

  message$ = this.store.select(message);

  errorMsg$ = this.store.select(errorMsg);

  loading$ = this.store.select(loading);

  checkNumber(value: number) {
    this.store.dispatch(sendNumber({number: value}))
  }

  flushMsg() {
    this.store.dispatch(flushMsg());
  }

}
