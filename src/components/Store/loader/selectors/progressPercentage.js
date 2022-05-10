import { createSelector } from 'reselect';

/**
 * @param {number|string} id - Loader ID
 * @return {Function}
 */
const progressPercentage = (id) => createSelector(
	(state) => state.loader,
	(state) => (state[id ?? 'window'] ?? {}).progressPercentage,
);

export default progressPercentage;
