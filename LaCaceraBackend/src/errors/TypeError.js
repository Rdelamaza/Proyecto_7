import { CustomError } from './CustomErrors.js';

export class ValidationError extends CustomError {
    constructor(message, details) {
        super(message || 'Validation error', 400, details);
    
    }
};

export class NotFoundError extends CustomError {
    constructor(message, details) {
        super(message || 'Not found element', 404, details);
    }
};

export class DataBaseError extends CustomError {
    constructor(message, statusCode, details) {
        super(message || 'Data base error',statusCode || 500, details);
    }
};

export class InternalServerError extends CustomError {
    constructor(message,statusCode, details) {
        super(message || 'Internal server error', statusCode || 500, details);
    }
};

export class ProductsError extends CustomError {
    constructor(message, details) {
        super(message || 'Error en el producto', 400, details);
    };
};

//User Error

export class UserError extends CustomError {
    constructor(message, details) {
        super(message || 'Error en el usuario', statusCode, 401, details);
    }
};