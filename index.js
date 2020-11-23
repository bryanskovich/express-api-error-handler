const AppError = require("./classes/AppError");
const AuthError = require("./classes/AuthError");
const NotFoundError = require("./classes/NotFoundError");
const PermissionError = require("./classes/PermissionError");

module.exports = (err, req, res, next) => {
	if (err && err instanceof AppError) {
		return res.status(err.code).json({
			success: false,
			error: true,
			message: err.message,
			errors: err.errors,
		});
	}
};

exports.AppError = AppError;
exports.AuthError = AuthError;
exports.NotFoundError = NotFoundError;
exports.PermissionError = PermissionError;
