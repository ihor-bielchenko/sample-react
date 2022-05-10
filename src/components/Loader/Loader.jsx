import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import LinearProgress from '@mui/material/LinearProgress';
import selectorLoaderVisible from 'components/Store/loader/selectors/visible.js';
import selectorLoaderProgressPercentage from 'components/Store/loader/selectors/progressPercentage.js';
import selectorLoaderText from 'components/Store/loader/selectors/text.js';

const components = {
	circular: CircularProgress,
	linear: LinearProgress,
};
let Loader = ({ 
	id,
	variant,
	children,
	...props 
}) => {
	const visible = useSelector(selectorLoaderVisible(id));
	const progressPercentage = useSelector(selectorLoaderProgressPercentage(id));
	const text = useSelector(selectorLoaderText(id));
	const Component = components[variant];

	return <React.Fragment>
		{visible
			? <Box>
				<Box>
					{(id === 'window')
						? <Backdrop
							open={true}
							sx={{
								zIndex: 9999,
							}}>
							<Component 
								size={100}
								sx={{
									color: '#FFF'
								}}
								{ ...(progressPercentage > -1
									&& progressPercentage <= 100)
									? { 
										variant: 'determinate',
										value: progressPercentage, 
									}
									: {} }
								{ ...props } />
						</Backdrop>
						: <Component 
							{ ...(progressPercentage > -1
								&& progressPercentage <= 100)
								? { 
									variant: 'determinate',
									value: progressPercentage, 
								}
								: {} }
							{ ...props } />}
				</Box>
				{text
					? <Typography>
						{text}
					</Typography>
					: <React.Fragment />}
			</Box>
			: <React.Fragment />}
	</React.Fragment>
};

Loader = React.memo(Loader);
Loader.defaultProps = {
	id: 'window',
	variant: 'circular',
};
Loader.propTypes = {
	id: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]),
	variant: PropTypes.oneOf([
		'circular',
		'linear',
	]),
};

export default Loader;
