// eslint-disable-next-line no-unused-vars
const notFound = () => (req, res, next) => {
  res.status(404).json({
    statusCode: 404,
    payload: {
      statusCode: 404,
      message: `Unable to found ${req.originalUrl} requested resource!`,
    },
  });
};

module.exports = notFound;
