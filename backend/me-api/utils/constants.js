const rateLimiter = require('express-rate-limit');

const STATUS_OK = 200;
const CREATED = 201;
const INVAILD_ID = 'NotValidId';
const ERROR_CODE_UNIQUE = 11000;
const BAD_REQUEST_CODE = 400;
const ERROR_NOT_FOUND = 404;
const INTERNAL_CODE = 500;

const limiter = rateLimiter({
  windowMs: 15 * 60 * 1000,
  max: 50,
  standardHeaders: true,
  legacyHeaders: false,
  message: { message: 'Слишком много запросов с вашего IP, пожалуйста, повторите запрос позже' },
});

const {
  PORT = 3001,
  MONGO = 'mongodb://127.0.0.1:27017/masseffect',
  JWT_SECRET = '64b47cd7d12efe505db57767',
  SALT_ROUNDS = 15,
  NODE_ENV,
} = process.env;

module.exports = {
  STATUS_OK,
  CREATED,
  INVAILD_ID,
  ERROR_NOT_FOUND,
  ERROR_CODE_UNIQUE,
  BAD_REQUEST_CODE,
  INTERNAL_CODE,
  limiter,
  PORT,
  MONGO,
  JWT_SECRET,
  SALT_ROUNDS,
  NODE_ENV,
};
