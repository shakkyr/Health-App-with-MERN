// Secrets come from .env (see .env.example), never from source code.
require('dotenv').config();

module.exports = {
    jwtSecret : process.env.JWT_SECRET,
    jwtExpire : process.env.JWT_EXPIRE || '6h'
}
