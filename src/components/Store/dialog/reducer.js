import main from 'components/Store/main/reducer.js';
import * as actionsLocal from './actions';

const dialog = () => main('dialog', actionsLocal);

export default dialog;
