import React from 'react';
import { Provider as ProviderStore } from 'react-redux';
import { setStore } from './Store.js';

let Provider = ({ children }) => {
	return <ProviderStore store={setStore()}>
		{children}
	</ProviderStore>
};

Provider = React.memo(Provider);
Provider.defaultProps = {
};

export default Provider;
