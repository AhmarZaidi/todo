import PropTypes from 'prop-types';

/**
 * Checkbox is a functional component that renders a checkbox input.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {boolean} props.checked - The checked state of the checkbox.
 * @param {Function} props.onClick - The function to be called when the checkbox is clicked.
 */
const Checkbox = ({ checked = false, onClick }) => {
    return (
        <input
            className='checkbox'
            type='checkbox'
            checked={checked}
            onClick={onClick}
            readOnly
        />
    );
};

Checkbox.propTypes = {
    checked: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
};

export default Checkbox;
