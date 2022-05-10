import Store from 'components/Store';

/**
 * @param {number|string} id - Snackbar ID
 * @return {Function}
 */
export const fireClose = (id) => async (prefix = 'snackbar') => {
	Store().dispatch({
		type: prefix +'.close',
		payload: id,
	});
};

/**
 * @param {object} state - Current redux state
 * @param {object} action - Action data
 * @return {object} New state
 */
export const reducerClose = (state, action) => {
	if ((typeof action.payload === 'string' && action.payload)
		|| typeof action.payload === 'number') {
		delete state[action.payload];
		return ({ 
			...state,
			_updater: state._updater + 1, 
		});
	}
	return ({
		_updater: state._updater + 1,
	});
};
