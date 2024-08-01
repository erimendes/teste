// frontend/src/components/Button.js
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ userRole, allowedRoles, onClick, children }) => {
  if (!allowedRoles.includes(userRole)) {
    return null;
  }

  return <button onClick={onClick}>{children}</button>;
};

Button.propTypes = {
  userRole: PropTypes.string.isRequired,
  allowedRoles: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
