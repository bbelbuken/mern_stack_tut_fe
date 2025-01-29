const { logEvents } = require('./logger');

// ! Overrides default express Error Handler
const errorHandler = (err, req, res, next) => {
    logEvents(
        `${err.name}: ${err.message}\t${req.method}\t${req.url}\t${req.headers.origin}`,
        'errLog.log'
    );
    console.log(err.stack);

    const status = res.statusCode ? res.statusCode : 500; // server error
    res.status(status);
    res.json({ message: err.message });

    // * final error-handling middleware so no next() needed
};

module.exports = errorHandler;
