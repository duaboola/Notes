import PropTypes from 'prop-types';

export const Button = ({ children, isDisabled }) => (
    <button
        type="submit"
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        disabled={isDisabled}
    >
        {children}
    </button>
);
Button.propTypes = {
    children: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool.isRequired,
};
