import main from 'components/Store/main/reducer.js';
import * as actionsLocal from './actions';

const loader = () => main('loader', actionsLocal);

export default loader;
