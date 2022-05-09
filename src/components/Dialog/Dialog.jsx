import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import MiuDialog from '@mui/material/Dialog';
import selectorDialogVisible from 'components/Store/dialog/selectors/visible.js';
import { fireClose as actionDialogClose } from 'components/Store/dialog/actions/close.js';

let Dialog = ({
	id,
	children,
	...props
}) => {
	const openFlag = useSelector(selectorDialogVisible(id));
	const onClose = React.useCallback((e) => {
		actionDialogClose(id)();
	}, [
		id,
	]);

	// onMount
	React.useEffect(() => () => {
		onClose();
	}, [
		onClose,
	]);

	return <React.Fragment>
		<MiuDialog
			fullWidth
			maxWidth="md"
			open={openFlag}
			onClose={onClose}
			{ ...props }>
			{children}
		</MiuDialog>
	</React.Fragment>;
};

Dialog = React.memo(Dialog);
Dialog.defaultProps = {
};
Dialog.propTypes = {
	id: PropTypes.string,
};

export default Dialog;