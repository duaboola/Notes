import PropTypes from 'prop-types';

export const MutedLink = ({ children }) => {
    return <p className="mt-2 text-sm font-medium no-underline">{children}</p>;
};
MutedLink.propTypes = {
    children: PropTypes.string.isRequired,
};
