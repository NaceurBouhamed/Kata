import { createReducer, on } from "@ngrx/store";
import { initNumberState } from "./state";
import * as NumberActions from "./actions";

const NumberReducers = createReducer(
    initNumberState,
    on(NumberActions.sendNumber, (state, action) => ({
        ...state,
        loading: true,
        number: action.number,
        error: null
    })),
    on(NumberActions.sendNumberFailure, (state, action) => ({
        ...state,
        loading: false,
        error: action.error?.message || 'Unkown error, see logs'
    })),
    on(NumberActions.sendNumberSuccess, (state, action) => ({
        ...state,
        msg: action.msg,
        loading: false,
        error: null
    })),
    on(NumberActions.flushMsg, (state, action) => ({
      ...state,
      msg: "",
      loading: false,
      error: null
  })),
)

export { NumberReducers }
