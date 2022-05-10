import React from 'react';
import { fireTokensRefresh as actionAuthTokensRefresh } from 'components/Store/auth/actions/tokensRefresh.js';

let Provider = ({ children }) => {
	React.useEffect(() => {
		actionAuthTokensRefresh()();
	}, []);

	return <React.Fragment>
		{children}
	</React.Fragment>
};

Provider = React.memo(Provider);
Provider.defaultProps = {
};

export default Provider;
