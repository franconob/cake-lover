import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { createCake } from '../../state-mgmt/cake/thunks';
import CakeNew from './CakeNew';

export const mapDispatchToProps = (dispatch: Dispatch) => ({
    createCake: (name: string, comment: string, yumFactor: number, imageUrl: string) => dispatch<any>(createCake(name, comment, yumFactor, imageUrl))
});

export default connect(null, mapDispatchToProps)(CakeNew);
