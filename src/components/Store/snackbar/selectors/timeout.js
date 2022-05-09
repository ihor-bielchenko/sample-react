import { createSelector } from 'reselect';

/**
 * @param {number|string} id - Snackbar ID
 * @return {Function}
 */
const timeout = (id) => createSelector(
	(state) => (state.snackbar ?? {})[id] ?? {},
	(state) => state.timeout,
);

export default timeout;
