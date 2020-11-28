const AppError = require("./classes/AppError");
const AuthError = require("./classes/AuthError");
const NotFoundError = require("./classes/NotFoundError");
const PermissionError = require("./classes/PermissionError");
const errorHandler =  (err, req, res, next) => {
	if (err && err instanceof AppError) {
		return res.status(err.code).json({
			success: false,
			error: true,
			message: err.message,
			errors: err.errors,
		});
	}
};
module.exports = {
	AppError:AppError,
	AuthError:AuthError,
	NotFoundError:NotFoundError,
	PermissionError:PermissionError,
	errorHandler : errorHandler
}
