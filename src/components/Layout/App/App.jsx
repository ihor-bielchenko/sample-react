import React from 'react';
import { useSelector } from 'react-redux';
import { 
	Outlet,
	useNavigate, 
} from 'react-router-dom';
import selectorAuthFlag from 'components/Store/auth/selectors/authFlag.js';

let App = () => {
	const navigate = useNavigate();
	const authFlag = useSelector(selectorAuthFlag());

	React.useEffect(() => {
		if (!authFlag) {
			navigate(`/${process.env.PAGE_URL_AUTH}/${process.env.PAGE_URL_AUTH_SIGN_IN}`);
		}
	}, [
		navigate,
		authFlag,
	]);

	return <React.Fragment>
		{authFlag
			? <Outlet />
			: <React.Fragment />}
	</React.Fragment>;
};

App = React.memo(App);
App.defaultProps = {
};
App.propTypes = {
};

export default App;
