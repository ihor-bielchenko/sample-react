import axios from 'axios';
import Store from 'components/Store';
import lexicon from 'components/Language/utils/lexicon.js';
import { fireShowError as actionSnackbarShowError } from 'components/Store/snackbar/actions/showError.js';
import { fireShow as actionLoaderShow } from 'components/Store/loader/actions/show.js';
import { fireHide as actionLoaderHide } from 'components/Store/loader/actions/hide.js';

/**
 * @return {Function}
 */
export const fireSignIn = (login = '', password = '', navigate = () => {}) => async (prefix = 'auth') => {
	if (!login
		|| !password) {
		return actionSnackbarShowError()(lexicon('storeAuthSignInFieldsEmpty'), 3000);
	}
	try {
		actionLoaderShow()();

		const request = await axios(`${process.env.SERVER_API_URL}/${process.env.SERVER_API_URL_SIGN_IN}?login=${login}&password=${password}`);

		if (typeof (((request || {}).data || {}).data || {}).accessToken !== 'string'
			|| typeof (((request || {}).data || {}).data || {}).refreshToken !== 'string') {
			throw new Error('Tokens not received.');
		}
		localStorage.setItem('accessToken', request.data.data.accessToken);
		localStorage.setItem('refreshToken', request.data.data.refreshToken);

		setTimeout(() => {
			Store().dispatch({
				type: prefix +'.signIn',
				payload: request.data.data,
			});
			navigate(process.env.PAGE_URL_HOME);
		}, 1000);
	}
	catch (err) {
		const errorResponse = err.response
			? (err.response.data.message || (err.response.data.error
				? err.response.data.error.text
				: err.message))
			: err.message;
		const errorMessage = `${lexicon('storeAuthSignInErrorResponse')}: "${errorResponse}"`;

		actionSnackbarShowError()(errorMessage, 3000);
		actionLoaderHide()();
	}
};

/**
 * @param {object} state - Current redux state
 * @param {object} action - Action data
 * @return {object} New state
 */
export const reducerSignIn = (state, action) => {
	return {
		...(action.payload ?? {}),
		authFlag: true,
	};
};
