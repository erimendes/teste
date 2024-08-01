// src/app/dashboard/components/button/Button.js
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ userRole, allowedRoles, children }) => {
  if (!allowedRoles.includes(userRole)) {
    return null;
  }

  return <button>{children}</button>;
};

Button.propTypes = {
  userRole: PropTypes.string.isRequired,
  allowedRoles: PropTypes.arrayOf(PropTypes.string).isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
