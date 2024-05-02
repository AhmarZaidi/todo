import PropTypes from 'prop-types';
import { useState } from 'react';

/**
 * AddItem is a functional component that renders a form for adding a new item.
 * It maintains a local state for the item text and handles the form submission.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {Function} props.handleAddItem - The function to be called when a new item is added.
 */
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
            className='item-container add-item-container'
            onSubmit={handleSubmit}>
            <input
                className='add-item-input'
                type='text'
                name='addItem'
                placeholder='Add new tasks in your list'
                value={itemText}
                onChange={(e) => setItemText(e.target.value)}
            />
            <button className='add-item-button' type='submit'>
                add
            </button>
        </form>
    );
};

AddItem.propTypes = {
    handleAddItem: PropTypes.func.isRequired,
};

export default AddItem;
