import React, { useState } from 'react'
import { ReactComponent as DeleteIcon } from '../assets/icons/delete.svg';
import { ReactComponent as EditIcon } from '../assets/icons/edit.svg';

import Checkbox from './Checkbox';

const Item = ({ itemText, completed, onToggle, onDelete, onEdit }) => {

	const [editItem, setEditItem] = useState(false);

	const getItemText = () => {
		return itemText.substring(0, 25) + ((25 < itemText.length) ? '...' : '');
	}

	const handleEditSubmit = (e) => {
		e.preventDefault();
		setEditItem(false);
	}

	return (
		<section className={'item-container' + (completed ? ' item-completed' : '')}>
			{(editItem) ?
				<form className='item-label-container' onSubmit={e => handleEditSubmit(e)}>
					<input
						type='text'
						className={'edit-item-input' + (completed ? ' item-label-completed' : '')}
						placeholder={getItemText()}
						onChange={e => onEdit(e.target.value)}
					/>
				</form>
				:
				<div className='item-label-container'>
					<label type='text' title={itemText} className={'item-label' + (completed ? ' item-label-completed' : '')}>{getItemText()}</label>
				</div>
			}
			<div className='item-buttons-container'>
				<Checkbox checked={completed} onClick={() => onToggle(!completed)} />
				<EditIcon className='item-button' onClick={() => setEditItem(!editItem)} />
				<DeleteIcon className='item-button' onClick={onDelete} />
			</div>
		</section>
	)
}

export default Item;