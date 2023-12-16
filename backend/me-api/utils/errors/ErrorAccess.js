class ErrorAccess extends Error {
  constructor(message) {
    super(message);
    this.name = 'ErrorAccess';
    this.statusCode = 401;
  }
}

module.exports = ErrorAccess;
