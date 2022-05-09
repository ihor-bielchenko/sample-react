import { createSelector } from 'reselect';

/**
 * @param {number|string} id - Loader ID
 * @return {Function}
 */
const visible = (id) => createSelector(
	(state) => state.loader,
	(state) => (state[id ?? 'window'] ?? {}).progressPercentage > -1,
);

export default visible;
