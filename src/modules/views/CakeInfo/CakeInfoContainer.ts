import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { IRootState } from '../../state-mgmt/rootState';
import { getCakeInfo } from '../../state-mgmt/cake/thunks';

import CakeInfo from './CakeInfo';

export const mapStateToProps = (state: IRootState) => ({
    cake: state.cake.currentCakeId ? state.cake.cakeMap[state.cake.currentCakeId] : null,
    isLoadingCake: state.cake.isLoadingCake
});

export const mapDispatchToProps = (dispatch: Dispatch) => ({
    getCake: (cakeId: string) => dispatch<any>(getCakeInfo(cakeId))
});

export default connect(mapStateToProps, mapDispatchToProps)(CakeInfo);
