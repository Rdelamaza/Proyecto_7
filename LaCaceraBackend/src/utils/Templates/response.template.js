
export const response =(res, data, statusCode, message, ...custom) => {
    res.status(statusCode).json({
        message: message || 'Successful response',
        statusCode,
        data,
        ...custom
    });

};