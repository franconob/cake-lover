import { ICake } from "../../models/cake";

export interface ICakeState {
  cakeMap: { [cakeId: string]: ICake };
  currentCakeId: string | null;
  isLoadingMap: boolean;
  isLoadingCake: boolean;
}

export const initialState = {
  cakeMap: {},
  currentCakeId: null,
  isLoadingCake: false,
  isLoadingMap: false
};
