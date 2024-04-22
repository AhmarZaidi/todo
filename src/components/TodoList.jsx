import React, { useState, useEffect } from 'react';

import Item from './Item';
import AddItem from './AddItem';

const TodoList = () => {

	const [items, setItems] = useState([]);

	useEffect(() => {
		const storedItems = JSON.parse(localStorage.getItem('items'));
		if (storedItems && Array.isArray(storedItems)) {
			setItems(storedItems);
		}
	}, []);

	useEffect(() => {
		if (0 < items.length) {
			localStorage.setItem('items', JSON.stringify(items));
		}
	}, [items]);

	const handleAddItem = (itemText) => {
		setItems([...items, { id: items.length + 1, text: itemText, completed: false }]);
	};

	const handleCompletedToggle = (id, completed) => {
		const updatedItems = items.map(item => item.id === id ? { ...item, completed: !item.completed } : item);
		setItems(updatedItems);
	};

	const handleDeleteItem = (id) => {
		setItems(items.filter(item => item.id !== id));
	};

	const handleEditItem = (id, text) => {
		const updatedItems = items.map(item => item.id === id ? { ...item, text: text } : item);
		setItems(updatedItems);
	};

	const sortedItems = items.sort((a, b) => {
		if (a.completed === b.completed) {
			return a.id - b.id;
		}
		return a.completed ? 1 : -1;
	});

	return (
		<section className='todo-list-container'>
			<h1 className='todo-title'>Add items to your list...</h1>
			<h1 className='todo-title-small'>Add items</h1>
			<hr className='separator' />
			<div className='items-container'>
				<div className='item-list-container'>
					{sortedItems.map(item => (
						<Item
							key={item.id}
							className='item'
							itemText={item.text}
							completed={item.completed}
							onToggle={completed => handleCompletedToggle(item.id, completed)}
							onEdit={text => handleEditItem(item.id, text)}
							onDelete={() => handleDeleteItem(item.id)}
						/>
					))}
				</div>
				<AddItem handleAddItem={handleAddItem} />
			</div>
		</section>
	);
};

export default TodoList;
