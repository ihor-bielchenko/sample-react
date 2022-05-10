import { createSelector } from 'reselect';

/**
 * @param {number|string} id - Loader ID
 * @return {Function}
 */
const text = (id) => createSelector(
	(state) => state.loader,
	(state) => (state[id ?? 'window'] ?? {}).text,
);

export default text;
