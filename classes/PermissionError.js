const AppError = require("./AppError");

class PermissionError extends AppError {
	constructor() {
		super("Access denied", {}, 403);
	}
}
module.exports = PermissionError;
