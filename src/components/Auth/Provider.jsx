import React from 'react';
import { fireSchema as actionAuthSchema } from 'components/Store/auth/actions/schema.js';

let Provider = ({ children }) => {

	// onMount
	React.useEffect(() => {
		actionAuthSchema()();
	}, []);

	return <React.Fragment>
		{children}
	</React.Fragment>
};

Provider = React.memo(Provider);
Provider.defaultProps = {
};

export default Provider;
