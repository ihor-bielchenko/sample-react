import React from 'react';
import PropTypes from 'prop-types';
import FormControl from '@mui/material/FormControl';
import MiuSelect from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import IconButton from '@mui/material/IconButton';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

let Select = ({
	name,
	value,
	defaultValue,
	required,
	disabled,
	label,
	helperText,
	error,
	size,
	onSource,
	onHelp,
	children,
	...props
}) => {
	return <React.Fragment>
		<FormControl 
			fullWidth 
			name={name}
			required={required}
			disabled={disabled}
			error={!!error}>
			<InputLabel 
				id={name} 
				size={size}>
				{label}
			</InputLabel>
			<MiuSelect
				{ ...props }
				size={size}
				labelId={name}
				label={label}
				{ ...(typeof value === 'number' || typeof value === 'string')
					? { value }
					: ((typeof defaultValue === 'number' || typeof defaultValue === 'string')
						? { defaultValue }
						: { defaultValue: '' }) }>
				{children}
			</MiuSelect>
			{(onHelp || error || helperText)
				? <FormHelperText 
					error={!!error}
					sx={{
						marginLeft: 0,
					}}>
					{onHelp
						? <IconButton 
							onClick={onHelp}
							sx={{
								padding: 4,
							}}>
							<HelpOutlineIcon
								sx={{
									fontSize: 12,
								}} />
						</IconButton>
						: <React.Fragment />}
					{error || helperText}
				</FormHelperText>
				: <React.Fragment />}
		</FormControl>
	</React.Fragment>;
};

Select = React.memo(Select);
Select.defaultProps = {
};
Select.propTypes = {
	error: PropTypes.string,
	value: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]),
	defaultValue: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]),
	onChange: PropTypes.func,
	onSource: PropTypes.func,
	onHelp: PropTypes.func,
};

export default Select;
