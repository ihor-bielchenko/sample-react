import { createSelector } from 'reselect';

/**
 * @return {Function}
 */
const all = () => createSelector(
	(state) => state.snackbar ?? {},
	(state) => state,
);

export default all;
