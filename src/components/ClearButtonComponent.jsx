import React from 'react';
import '../css/ClearButton.css';
import '../css/Screen.css';

const ClearButtonComponent = (props) => (
	<button className="clear-button" onClick={props.handleClear}>
		{props.children}
	</button>
);

export default ClearButtonComponent;
