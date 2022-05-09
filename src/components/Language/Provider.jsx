import React from 'react';

let Provider = ({ children }) => {
	// onMount
	React.useEffect(() => {
		window.addEventListener('onSwitchLang', (e) => {
			if (e.detail) {
				// switchLang(e.detail.cultureKey, e.detail.path);
			}
		});
	}, []);
	
	return <React.Fragment>
		{children}
	</React.Fragment>
};

Provider = React.memo(Provider);
Provider.defaultProps = {
};

export default Provider;
