import React from 'react';
import { Provider as ProviderStore } from 'react-redux';
import { setStore } from './Store.js';
import { fireSchema as actionLoaderSchema } from './loader/actions/schema.js';
import { fireSchema as actionMenuSchema } from './menu/actions/schema.js';
import { fireSchema as actionDialogSchema } from './dialog/actions/schema.js';
import { fireSchema as actionSnackbarSchema } from './snackbar/actions/schema.js';
import { fireSchema as actionAuthSchema } from './auth/actions/schema.js';

let Provider = ({ children }) => {
	React.useEffect(() => {
		actionLoaderSchema()();
		actionMenuSchema()();
		actionDialogSchema()();
		actionDialogSchema()();
		actionSnackbarSchema()();
		actionAuthSchema()();
	}, [
	]);

	return <ProviderStore store={setStore()}>
		{children}
	</ProviderStore>
};

Provider = React.memo(Provider);
Provider.defaultProps = {
};

export default Provider;
