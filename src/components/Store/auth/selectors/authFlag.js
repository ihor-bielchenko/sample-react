import { createSelector } from 'reselect';

/**
 * @return {Function}
 */
const authFlag = () => createSelector(
	(state) => state.auth,
	(state) => !!state.authFlag,
);

export default authFlag;
