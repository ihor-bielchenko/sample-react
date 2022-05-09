import { createSelector } from 'reselect';

/**
 * @param {number|string} id - Snackbar ID
 * @return {Function}
 */
const text = (id) => createSelector(
	(state) => (state.snackbar ?? {})[id] ?? {},
	(state) => state.text,
);

export default text;
