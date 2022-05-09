import main from './main/reducer.js';
import loader from './loader/reducer.js';
import menu from './menu/reducer.js';
import dialog from './dialog/reducer.js';
import snackbar from './snackbar/reducer.js';
import auth from './auth/reducer.js';

const structure = {
	main,
	loader,
	menu,
	dialog,
	snackbar,
	auth,
};

export default structure;
