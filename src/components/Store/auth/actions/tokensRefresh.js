import axios from 'axios';
import Store from 'components/Store';

let timeout;
/**
 * @return {Function}
 */
export const fireTokensRefresh = () => async (prefix = 'auth') => {
	try {
		const accessToken = localStorage.getItem('accessToken');
		const refreshToken = localStorage.getItem('refreshToken');

		if (accessToken
			&& refreshToken) {
			const request = await axios.post(`${process.env.SERVER_API_URL}/${process.env.SERVER_API_URL_TOKENS_REFRESH}`, {
				accessToken: localStorage.getItem('accessToken'),
				refreshToken: localStorage.getItem('refreshToken'),
			});

			localStorage.setItem('accessToken', request.data.data.accessToken);
			localStorage.setItem('refreshToken', request.data.data.refreshToken);
		
			Store().dispatch({
				type: prefix +'.tokensRefresh',
				payload: {
					authFlag: true,
					...request.data.data,
				},
			});
			clearTimeout(timeout);

			timeout = setTimeout(() => {
				fireTokensRefresh()();
			}, 240000);
		}
	}
	catch (err) {
		Store().dispatch({
			type: prefix +'.tokensRefresh',
		});
	}
};

/**
 * @param {object} state - Current redux state
 * @param {object} action - Action data
 * @return {object} New state
 */
export const reducerTokensRefresh = (state, action) => {
	return {
		authFlag: false,
		...(action.payload ?? {}),
		_updater: state._updater + 1,
	};
};
