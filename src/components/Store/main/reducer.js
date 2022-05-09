import * as actionsLocal from './actions';

/**
 * @param {string} prefix - Reducer name
 * @param {object} mergeActions - Custom actions
 * @return {object}
 */
const main = (prefix = 'main', mergeActions = {}) => {
	return {
		...(() => {
			const collector = {};
			const actions = {
				...actionsLocal,
				...mergeActions,
			};

			Object
				.keys(actions)
				.forEach((key) => collector[prefix +'.'+ key] = actions[key]);
			return collector;
		})(),
	};
};

export default main;
