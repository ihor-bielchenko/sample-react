import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import MiuMenu from '@mui/material/Menu';
import selectorMenuNode from 'components/Store/menu/selectors/node.js';
import { fireClose as actionMenuClose } from 'components/Store/menu/actions/close.js';

let Menu = ({
	id,
	children,
	...props
}) => {
	const anchorNode = useSelector(selectorMenuNode(id));
	const onClose = React.useCallback((e) => {
		actionMenuClose(id)();
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
		<MiuMenu
			keepMounted
			id={id}
			anchorEl={anchorNode}
			open={Boolean(anchorNode)}
			onClose={onClose}
			{ ...props }>
			{children}
		</MiuMenu>
	</React.Fragment>;
};

Menu = React.memo(Menu);
Menu.defaultProps = {
};
Menu.propTypes = {
	id: PropTypes.string,
};

export default Menu;
