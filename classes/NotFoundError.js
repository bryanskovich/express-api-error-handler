const AppError = require("./AppError");

class NotFoundError extends AppError {
	constructor(_message) {
		super(_message, {}, 404);
	}
}
module.exports = NotFoundError;
