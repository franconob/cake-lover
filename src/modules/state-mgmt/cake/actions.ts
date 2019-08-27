import { ICake } from "../../models/cake";

export enum ActionType {
  FETCH_LIST_SUCCESS = '[cake] fetch list success',
  CREATE_CAKE_START = "[cake] create start",
  FETCH_CACKE_SUCCESS = "[cake] fetch success",
  IS_LOADING_CAKE = "[cake] loading cake"
}

export default {
  fetchListSuccess: (list: ICake[]) => ({ type: ActionType.FETCH_LIST_SUCCESS, payload: { list }}),
  fetchSuccess: (cake: ICake) => ({ type: ActionType.FETCH_CACKE_SUCCESS, payload: { cake }}),
  isLoadingCake: (isLoading: boolean) => ({ type: ActionType.IS_LOADING_CAKE, payload: { isLoading }})
};
