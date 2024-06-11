import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import * as NumberActions from './actions';
import { sendNumber } from './actions';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { CheckerService } from '../../services/checker/checker.service';

@Injectable()
export class NumberEffects {
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(sendNumber),
      switchMap((action) => {
        console.log(action);
        return this.checkerService.checkNumber(action.number).pipe(tap(console.log),
          map((resp) => {console.log(resp,"<-RESP IS");return NumberActions.sendNumberSuccess({ msg: resp })}),
          catchError((error) =>
            {console.log('ERRRORRRR', error);return of(NumberActions.sendNumberFailure({ error: error.message }))},
          ),
        );
      }),
    ),
  );
  constructor(
    private actions$: Actions,
    private checkerService: CheckerService,
  ) {}
}
