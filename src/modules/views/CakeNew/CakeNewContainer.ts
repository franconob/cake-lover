import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import actions from '../../state-mgmt/cake/actions';
import CakeNew from './CakeNew';

export const mapDispatchToProps = (dispatch: Dispatch) => ({
    createCake: (name: string, comment: string, yumFactor: number) => dispatch(actions.createCakeStart(name, comment, yumFactor))
});

export default connect(null, mapDispatchToProps)(CakeNew);