import { ICake } from '../../models/cake';

export interface ICakeState {
    list: ICake[];
}

export const initalState = {
    list: []
};
