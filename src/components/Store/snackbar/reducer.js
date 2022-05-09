import main from 'components/Store/main/reducer.js';
import * as actionsLocal from './actions';

const snackbar = () => main('snackbar', actionsLocal);

export default snackbar;
