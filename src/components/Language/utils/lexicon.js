import language from '../language.js';

const lexicon = (variable = '') => {
	return language['ru'][variable];
};

export default lexicon;
