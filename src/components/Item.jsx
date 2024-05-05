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
 * @return {JSX.Element} A section containing the individual to-do item and its associated controls.
 */
const Item = ({ itemText, completed, onToggle, onDelete, onEdit }) => {
    /**
     * State hook to manage the editing mode of the item.
     */
    const [editItem, setEditItem] = useState(false);

    /**
     * State hook to manage the current text of the item being edited.
     */
    const [currentText, setCurrentText] = useState(itemText);

    /**
     * Ref hook to manage a reference to the input element for focusing.
     * @return {React.RefObject<HTMLInputElement>}
     */
    const inputRef = useRef(null);

    /**
     * useEffect hook to focus the input field when edit mode is enabled.
     *
     * @return {void}
     */
    useEffect(() => {
        if (editItem) {
            inputRef.current.focus();
        }
    }, [editItem]);

    /**
     * Gets a truncated version of the item text if it exceeds 25 characters.
     *
     * @return {string} The truncated or full item text.
     */
    const getItemText = () => {
        return itemText.substring(0, 25) + (25 < itemText.length ? '...' : '');
    };

    /**
     * Handles the form submission for editing an item.
     *
     * @param {React.FormEvent<HTMLFormElement>} e - The event object.
     * @return {void}
     */
    const handleEditSubmit = (e) => {
        e.preventDefault();
        onEdit(currentText);
        setEditItem(false);
    };

    /**
     * Toggles the edit mode of the item. If the item is currently being edited,
     * it submits the changes before toggling the mode.
     *
     * @return {void}
     */
    const toggleEditAndSave = () => {
        if (editItem) {
            handleEditSubmit(new Event('submit'));
        }
        setEditItem(!editItem);
    };

    /**
     * Handles changes to the input field for editing an item's text.
     *
     * @param {React.ChangeEvent<HTMLInputElement>} e - The event object.
     * @return {void}
     */
    const handleInputChange = (e) => {
        setCurrentText(e.target.value);
    };

    return (
        <section
            className={'item-container' + (completed ? ' item-completed' : '')}>
            {editItem ? (
                <form
                    className="item-label-container"
                    onSubmit={(e) => handleEditSubmit(e)}>
                    <input
                        ref={inputRef}
                        type="text"
                        className={
                            'edit-item-input' +
                            (completed ? ' item-label-completed' : '')
                        }
                        value={currentText}
                        onChange={handleInputChange}
                    />
                </form>
            ) : (
                <div className="item-label-container">
                    <label
                        type="text"
                        title={itemText}
                        className={
                            'item-label' +
                            (completed ? ' item-label-completed' : '')
                        }>
                        {getItemText()}
                    </label>
                </div>
            )}
            <div className="item-buttons-container">
                <Checkbox
                    checked={completed}
                    onClick={() => onToggle(!completed)}
                />
                <EditIcon className="item-button" onClick={toggleEditAndSave} />
                <DeleteIcon className="item-button" onClick={onDelete} />
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
