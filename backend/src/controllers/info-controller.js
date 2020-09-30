const pkg = require('../../package.json');

class InfoController {
  constructor(router) {
    this.router = router;
    this.router.get('/', this.info);
  }

  info(req, res) {
    res.send({
      env: process.env.NODE_ENV || 'development',
      project: pkg.name,
      version: pkg.version,
      author: pkg.author,
    });
  }
}

module.exports = InfoController;
