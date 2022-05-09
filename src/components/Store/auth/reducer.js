import main from 'components/Store/main/reducer.js';
import * as actionsLocal from './actions';

const auth = () => main('auth', actionsLocal);

export default auth;
