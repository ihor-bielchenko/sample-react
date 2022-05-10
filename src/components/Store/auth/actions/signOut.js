import Store from 'components/Store';

/**
 * @return {Function}
 */
export const fireSignOut = () => async (prefix = 'auth') => {
	localStorage.removeItem('accessToken');
	localStorage.removeItem('refreshToken');
	
	Store().dispatch({
		type: prefix +'.signOut',
	});
};

/**
 * @param {object} state - Current redux state
 * @param {object} action - Action data
 * @return {object} New state
 */
export const reducerSignOut = (state, action) => {
	return {
		authFlag: false,
		_updater: state._updater + 1,
	};
};
