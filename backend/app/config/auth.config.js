require('dotenv').config();

module.exports = {
  secret: process.env.JWT_SECRET_KEY,
  jwtExpiration: 120,          // 1 minuto
  jwtRefreshExpiration: 190,   // 2 minutos
};
