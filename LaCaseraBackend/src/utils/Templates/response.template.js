
export const response =(res, data, statusCode, message, ...custom) => {
    res.status(statusCode).json({
        message: message || 'Successfull response',
        statusCode,
        data,
        ...custom
    });

};