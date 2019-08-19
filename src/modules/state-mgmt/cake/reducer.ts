import { ICakeState, initalState } from './state';
import { IAction } from '../rootState';

export const cakeReducer = (state: ICakeState = initalState, action: IAction): ICakeState => {
  switch (action.type) {
    case "FETCH_CAKE_SUCCESS":
      return { ...state, list: action.payload.list };
    case "ADD_CAKE_SUCCESS":
      return { ...state, list: state.list.concat(action.payload.cake) };
    default:
      return state;
  }
};
