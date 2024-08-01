// src/app/middleware/authMiddleware.js
const ROLES = require('../utils/roles');

function checkRole(allowedRoles) {
  return (req, res, next) => {
    if (req.user && allowedRoles.includes(req.user.role)) {
      console.log('Access autorizado. User role:', req.user.role);
      next();
    } else {
      console.error('Access denied. User role:', req.user ? req.user.role : 'No user info');
      res.status(403).json({ message: 'Access denied' });
    }
  };
}

module.exports = checkRole;
