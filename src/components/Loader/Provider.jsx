import React from 'react';
import { useSelector } from 'react-redux';
import { fireHide as actionLoaderHide } from 'components/Store/loader/actions/hide.js';
import selectorLoaderExists from 'components/Store/loader/selectors/exists.js';
import selectorMenuExists from 'components/Store/menu/selectors/exists.js';
import selectorDialogExists from 'components/Store/dialog/selectors/exists.js';
import selectorAuthExists from 'components/Store/auth/selectors/exists.js';
import Loader from './Loader.jsx';

let Provider = ({ children }) => {
	const loaderExists = useSelector(selectorLoaderExists());
	const menuExists = useSelector(selectorMenuExists());
	const dialogExists = useSelector(selectorDialogExists());
	const authExists = useSelector(selectorAuthExists());
	const readyFlag = loaderExists
		&& menuExists
		&& dialogExists
		&& authExists;

	React.useEffect(() => {
		if (readyFlag) {
			setTimeout(() => {
				actionLoaderHide()();
			}, 1400);
		}
	}, [
		readyFlag,
	]);

	return <React.Fragment>
		{readyFlag
			? children
			: <React.Fragment />}
		<Loader />
	</React.Fragment>
};

Provider = React.memo(Provider);
Provider.defaultProps = {
};

export default Provider;
