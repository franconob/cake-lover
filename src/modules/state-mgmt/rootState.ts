import { createStore, combineReducers } from "redux";

import { cakeReducer } from "./cake/reducer";
import { ICakeState } from "./cake/state";

export interface IRootState {
  cake: ICakeState;
}

export interface IAction {
  type: string;
  payload?: any;
}

export const store = createStore<IRootState, IAction, any, any>(
  combineReducers({ cake: cakeReducer })
);
