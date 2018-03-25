import React from 'react';
import PropTypes from 'prop-types';

const Link = ({
    active,
    onClick,
    children,
}) => (
    <div
        onClick={onClick}
        style={{
            margin: '0 5px',
            cursor: 'pointer',
            fontWeight: active ? 900 : 300,
        }}
        role="button"
        aria-hidden
    >
        {children}
    </div>
);

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Link;
