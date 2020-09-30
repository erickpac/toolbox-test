// eslint-disable-next-line no-unused-vars
const errorHandler = () => (error, req, res, next) => {
  res.status(500).json({
    statusCode: 500,
    payload: {
      error,
      statusCode: 500,
      message: error.message,
    },
  });
};

module.exports = errorHandler;
