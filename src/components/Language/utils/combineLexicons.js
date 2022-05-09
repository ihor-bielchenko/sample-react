
const combineLexicons = (components) => {
	const allLexiconsByCultureKeys = {};

	Object
		.keys(components)
		.forEach((componentName) => {
			Object
				.keys(components[componentName])
				.forEach((cultureKey) => {
					allLexiconsByCultureKeys[cultureKey] = {
						...(allLexiconsByCultureKeys[cultureKey] || {}),
						...components[componentName][cultureKey],	
					};
				});
		});
	return allLexiconsByCultureKeys;
};

export default combineLexicons;
