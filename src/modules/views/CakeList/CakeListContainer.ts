import { connect } from "react-redux";
import { Dispatch } from "redux";

import { IRootState } from "../../state-mgmt/rootState";
import { getCakeList, getCakeInfo } from '../../state-mgmt/cake/thunks';

import CakeList from "./CakeList";

export const mapStateToProps = (state: IRootState) => ({
  cakeMap: state.cake.cakeMap
});

export const mapDispatchToProps = (dispatch: Dispatch) => ({
  getCakeList: () => dispatch<any>(getCakeList()),
  getCakeInfo: (cakeID: number) => dispatch<any>(getCakeInfo(cakeID))
})

export default connect(mapStateToProps, mapDispatchToProps)(CakeList);
