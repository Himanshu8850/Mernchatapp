const notFound = (req, res, next) => {
  const errnew = newError(`not found - ${req.originalUrl}`);
  res.status(404);
  next(errnew);
};

const errorhandler = (err, req, res, next) => {
  const statusCode = res.statusCode == 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: err.stack,
  });
};
module.exports = { notFound, errorhandler };
