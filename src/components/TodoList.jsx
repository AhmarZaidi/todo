import { useState, useEffect } from 'react';
import Item from './Item';
import AddItem from './AddItem';

/**
 * TodoList is a functional component that renders a list of to-do items.
 * It maintains a local state for the items and handles the addition, deletion, and editing of items.
 * It also persists the items in local storage and retrieves them on component mount.
 *
 * @return {JSX.Element} A section containing the list of to-do items and the functionality to add,
 * delete, and edit items.
 */
const TodoList = () => {
    /**
     * State hook for managing the list of todo items.
     */
    const [items, setItems] = useState([]);

    /**
     * useEffect hook to load items from local storage when the component mounts.
     *
     * @return {void}
     */
    useEffect(() => {
        const storedItems = JSON.parse(localStorage.getItem('items'));
        if (storedItems && Array.isArray(storedItems)) {
            setItems(storedItems);
        }
    }, []);

    /**
     * useEffect hook to save items to local storage whenever the items state changes.
     *
     * @return {void}
     */
    useEffect(() => {
        if (0 < items.length) {
            localStorage.setItem('items', JSON.stringify(items));
        }
    }, [items]);

    /**
     * Function to handle adding a new item to the list.
     *
     * @param {string} itemText - The text of the item to add.
     * @return {void}
     */
    const handleAddItem = (itemText) => {
        const trimmedText = itemText.trim();
        if (!trimmedText) {
            return;
        }
        setItems([
            ...items,
            { id: Date.now(), text: trimmedText, completed: false },
        ]);
    };

    /**
     * Function to handle toggling the completion status of an item.
     *
     * @param {number} id - The id of the item to toggle.
     * @param {boolean} completed - The current completion status of the item.
     * @return {void}
     */
    // eslint-disable-next-line no-unused-vars
    const handleCompletedToggle = (id, completed) => {
        const updatedItems = items.map((item) =>
            item.id === id ? { ...item, completed: !item.completed } : item,
        );
        setItems(updatedItems);
    };

    /**
     * Function to handle deleting an item from the list.
     *
     * @param {number} id - The id of the item to delete.
     * @return {void}
     */
    const handleDeleteItem = (id) => {
        setItems(items.filter((item) => item.id !== id));
    };

    /**
     * Function to handle editing the text of an item.
     *
     * @param {number} id - The id of the item to edit.
     * @param {string} text - The new text for the item.
     * @return {void}
     */
    const handleEditItem = (id, text) => {
        const updatedItems = items.map((item) =>
            item.id === id ? { ...item, text } : item,
        );
        setItems(updatedItems);
    };

    /**
     * Sorts the items array based on completion status and id.
     * Completed items are moved to the end of the list.
     * Within the completed and uncompleted groups, items are sorted by id
     * in ascending order.
     *
     * @return {Array} The sorted array of items.
     */
    const sortedItems = items.sort((a, b) => {
        if (a.completed === b.completed) {
            return a.id - b.id;
        }
        return a.completed ? 1 : -1;
    });

    return (
        <section className="todo-list-container">
            <h1 className="todo-title">Add items to your list...</h1>
            <h1 className="todo-title-small">Add items</h1>
            <hr className="separator" />
            <div className="items-container">
                <div className="item-list-container">
                    {sortedItems.map((item) => (
                        <Item
                            key={item.id}
                            className="item"
                            itemText={item.text}
                            completed={item.completed}
                            onToggle={(completed) =>
                                handleCompletedToggle(item.id, completed)
                            }
                            onEdit={(text) => handleEditItem(item.id, text)}
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
