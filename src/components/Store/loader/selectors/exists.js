import { createSelector } from 'reselect';

/**
 * @return {Function}
 */
const exists = () => createSelector(
	(state) => state.loader,
	(state) => (state ?? {})._updater >= 0,
);

export default exists;
