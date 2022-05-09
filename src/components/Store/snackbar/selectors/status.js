import { createSelector } from 'reselect';

/**
 * @param {number|string} id - Snackbar ID
 * @return {Function}
 */
const status = (id) => createSelector(
	(state) => (state.snackbar ?? {})[id] ?? {},
	(state) => state.status,
);

export default status;
