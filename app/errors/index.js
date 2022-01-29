
function error404(req, res, next) {
    return res.status(404).json({ done: false });
}

async function errorHandler(err, req, res, next) {
    // aqui se procesaria el error
    // ...
    // ...
    err.code = 400;
    next(err);
}

function errorResponse(err, req, res, next) {
    return res.status(err.code).json(err);
}

module.exports = {
    error404, errorHandler, errorResponse
};
