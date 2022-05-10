import React from 'react';
import { Outlet } from 'react-router-dom';

let Auth = () => {
	return <React.Fragment>
		<Outlet />
	</React.Fragment>;
};

Auth = React.memo(Auth);
Auth.defaultProps = {
};
Auth.propTypes = {
};

export default Auth;
