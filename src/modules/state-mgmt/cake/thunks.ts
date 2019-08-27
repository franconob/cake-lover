import { Dispatch, ActionCreator, Action } from "redux";
import { ThunkAction } from "redux-thunk";

import actions, { ActionType } from "./actions";
import ApiService from "../../services/ApiService";
import { IRootState } from "../rootState";

export const getCakeList: ActionCreator<ThunkAction<void, IRootState, void, Action<ActionType.FETCH_LIST_SUCCESS>>> = () => async (dispatch: Dispatch) => {
    const cakeList = await ApiService.getCakeList();
    dispatch(actions.fetchListSuccess(cakeList));
};

export const getCakeInfo: ActionCreator<ThunkAction<void, IRootState, void, Action<ActionType.FETCH_CACKE_SUCCESS>>> = (cakeId: string) => async (dispatch: Dispatch) => {
    dispatch(actions.isLoadingCake(true));
    const cake = await ApiService.getCake(cakeId);
    dispatch(actions.fetchSuccess(cake));
    dispatch(actions.isLoadingCake(false));
};

export const createCake: ActionCreator<ThunkAction<void, IRootState, void, Action<ActionType.CREATE_CAKE_START>>> = (
    name: string,
    comment: string,
    yumFactor: number,
    imageUrl: string
) => async (dispatch: Dispatch) => {
    return await ApiService.createCake(name, comment, yumFactor, imageUrl);
};
