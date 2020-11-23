const AppError = require("./AppError");

class AuthError extends AppError {
	constructor(_message) {
		super(_message, {}, 401);
	}
}

module.exports = AuthError;
