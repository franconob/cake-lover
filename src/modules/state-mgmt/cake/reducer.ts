import { ICakeState, initialState } from "./state";
import { ActionType } from "./actions";
import { IAction } from "../rootState";
import { ICake } from "../../models/cake";

export const cakeReducer = (
  state: ICakeState = initialState,
  action: IAction
): ICakeState => {
  switch (action.type) {
    case ActionType.FETCH_LIST_SUCCESS:
      return {
        ...state,
        cakeMap: action.payload.list.reduce(
          (total: {}, cake: ICake) => ({ ...total, [cake.id]: cake }),
          {}
        )
      };
    case ActionType.IS_LOADING_CAKE:
      return { ...state, isLoadingCake: action.payload.isLoading };
    case ActionType.FETCH_CACKE_SUCCESS:
      return {
        ...state,
        currentCakeId: action.payload.cake.id,
        cakeMap: {
          ...state.cakeMap,
          [action.payload.cake.id]: action.payload.cake
        }
      };
    default:
      return state;
  }
};
