import Store from 'components/Store';
import { STATUS_INFO } from '../consts.js';

/**
 * @param {number|string} id - Snackbar ID
 * @return {Function}
 */
export const fireShow = (id) => async (status = STATUS_INFO, text = '', timeout = -1, prefix = 'snackbar') => {
	Store().dispatch({
		type: prefix +'.show',
		payload: {
			id,
			status,
			text,
			timeout,
		},
	});
};

/**
 * @param {object} state - Current redux state
 * @param {object} action - Action data
 * @return {object} New state
 */
export const reducerShow = (state, action) => {
	const snackbarKey = ((typeof action.payload.id === 'string' && action.payload.id)
		|| typeof action.payload.id === 'number')
		? action.payload.id
		: Date.now();

	return {
		...state,
		[snackbarKey]: {
			status: STATUS_INFO,
			text: '',
			timeout: -1,
			...action.payload,
		},
		_updater: state._updater + 1,
	};
};
