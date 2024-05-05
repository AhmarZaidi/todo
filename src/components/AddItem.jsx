import PropTypes from 'prop-types';
import { useState } from 'react';

/**
 * AddItem is a functional component that renders a form for adding a new item.
 * It maintains a local state for the item text and handles the form submission.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {Function} props.handleAddItem - The function to be called when a new item is added.
 * @return {JSX.Element} A form for adding a new item to the to-do list.
 */
const AddItem = ({ handleAddItem }) => {
    /**
     * State hook for managing the text of the item to be added.
     */
    const [itemText, setItemText] = useState('');

    /**
     * Handles the form submission for adding a new item.
     * Prevents the default form submission event and calls the handleAddItem function
     * if itemText is not empty. Resets the itemText state to an empty string after the
     * item is added.
     *
     * @param {React.FormEvent<HTMLFormElement>} e - The event object.
     * @return {void}
     */
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
            onSubmit={handleSubmit}>
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

AddItem.propTypes = {
    handleAddItem: PropTypes.func.isRequired,
};

export default AddItem;
