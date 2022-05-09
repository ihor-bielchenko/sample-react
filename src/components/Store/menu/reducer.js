import main from 'components/Store/main/reducer.js';
import * as actionsLocal from './actions';

const menu = () => main('menu', actionsLocal);

export default menu;
