import React from 'react';

const Checkbox = ({ checked = false, onClick }) => {
	return (
		<input
			className="checkbox"
			type="checkbox"
			checked={checked}
			onClick={onClick}
			readOnly
		/>
	);
};

export default Checkbox;
