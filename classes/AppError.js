class AppError extends Error {
	constructor(_message, _errors, _code) {
		super(_message);
		this.errors = _errors;
		this.code = _code;
	}
}

module.exports = AppError;
