import PropTypes from 'prop-types';

export const BoldLink = ({ children }) => {
    return <p className="text-xl inline p-2 text-blue-800  font-medium no-underline">{children}</p>;
};
BoldLink.propTypes = {
    children: PropTypes.string.isRequired,
};
