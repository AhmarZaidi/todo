import PropTypes from 'prop-types';
import { useState, useRef, useEffect } from 'react';
import { ReactComponent as DeleteIcon } from '../assets/icons/delete.svg';
import { ReactComponent as EditIcon } from '../assets/icons/edit.svg';

import Checkbox from './Checkbox';

/**
 * Item is a functional component that renders an individual item in the to-do list.
 * It maintains a local state for editing the item and handles the form submission for editing.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.itemText - The text of the item.
 * @param {boolean} props.completed - The completion state of the item.
 * @param {Function} props.onToggle - The function to be called when the completion state is toggled.
 * @param {Function} props.onDelete - The function to be called when the item is deleted.
 * @param {Function} props.onEdit - The function to be called when the item is edited.
 */
const Item = ({ itemText, completed, onToggle, onDelete, onEdit }) => {
    const [editItem, setEditItem] = useState(false);
    const [currentText, setCurrentText] = useState(itemText);
    const inputRef = useRef(null);

    useEffect(() => {
        if (editItem) {
            inputRef.current.focus();
        }
    }, [editItem]);

    const getItemText = () => {
        return itemText.substring(0, 25) + (25 < itemText.length ? '...' : '');
    };

    const handleEditSubmit = (e) => {
        e.preventDefault();
        onEdit(currentText);
        setEditItem(false);
    };

    const handleInputChange = (e) => {
        setCurrentText(e.target.value);
    };

    return (
        <section
            className={'item-container' + (completed ? ' item-completed' : '')}>
            {editItem ? (
                <form
                    className='item-label-container'
                    onSubmit={(e) => handleEditSubmit(e)}>
                    <input
                        ref={inputRef}
                        type='text'
                        className={
                            'edit-item-input' +
                            (completed ? ' item-label-completed' : '')
                        }
                        value={currentText}
                        onChange={handleInputChange}
                    />
                </form>
            ) : (
                <div className='item-label-container'>
                    <label
                        type='text'
                        title={itemText}
                        className={
                            'item-label' +
                            (completed ? ' item-label-completed' : '')
                        }>
                        {getItemText()}
                    </label>
                </div>
            )}
            <div className='item-buttons-container'>
                <Checkbox
                    checked={completed}
                    onClick={() => onToggle(!completed)}
                />
                <EditIcon
                    className='item-button'
                    onClick={() => setEditItem(!editItem)}
                />
                <DeleteIcon className='item-button' onClick={onDelete} />
            </div>
        </section>
    );
};

Item.propTypes = {
    itemText: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    onToggle: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
};

export default Item;
