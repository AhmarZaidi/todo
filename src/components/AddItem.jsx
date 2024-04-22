import React, { useState } from 'react';

const AddItem = ({ handleAddItem }) => {
	const [itemText, setItemText] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		if ('' !== itemText) {
			handleAddItem(itemText);
			setItemText('');
		}
	};

	return (
		<form
			className="item-container add-item-container"
			onSubmit={handleSubmit}
		>
			<input
				className="add-item-input"
				type="text"
				name="addItem"
				placeholder="Add new tasks in your list"
				value={itemText}
				onChange={(e) => setItemText(e.target.value)}
			/>
			<button className="add-item-button" type="submit">
				add
			</button>
		</form>
	);
};

export default AddItem;
