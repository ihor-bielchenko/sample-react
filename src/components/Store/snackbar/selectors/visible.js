import { createSelector } from 'reselect';

/**
 * @param {number|string} id - Snackbar ID
 * @return {Function}
 */
const visible = (id) => createSelector(
	(state) => (state.snackbar ?? {})[id],
	(state) => !!state,
);

export default visible;
