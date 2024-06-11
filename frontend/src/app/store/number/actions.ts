import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';

const PREFIX = "[NUMBER]"

export const SEND_NUMBER = `${PREFIX} Posting number request`;
export const SEND_NUMBER_SUCCESS = `${SEND_NUMBER} SUCCESS`;
export const SEND_NUMBER_FAILURE = `${SEND_NUMBER} FAIL`;

export const FLUSH_MSG = `${SEND_NUMBER} Flush msg`;

export const sendNumber = createAction(SEND_NUMBER, props<{ number: number }>());
export const sendNumberSuccess = createAction(SEND_NUMBER_SUCCESS, props<{ msg: string }>());
export const sendNumberFailure = createAction(SEND_NUMBER_FAILURE, props<{ error: HttpErrorResponse }>());

export const flushMsg = createAction(FLUSH_MSG);
