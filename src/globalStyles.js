import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	body,
	html {
		margin: 0;
		padding: 0 !important;
		outline: none;
		display: block;
		height: 100%;
	}
	body {
		width: 100%;
		margin: 0 auto;
	}
	#root {
		position: relative;
		overflow-x: hidden;
		overflow-y: auto;
		padding: 0px;
	}
`;
