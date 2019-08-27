import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

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
  combineReducers({ cake: cakeReducer }),
  composeWithDevTools(applyMiddleware(thunk))
);
