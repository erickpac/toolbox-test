class TextsController {
  constructor(router) {
    this.router = router;
    this.router.post('/add-word', this.add);
  }

  add(req, res, next) {
    const { text } = req.body;

    if (text === undefined) {
      return next(new Error('Text attribute is missing in body'));
    }

    res.send({
      text,
    });
  }
}

module.exports = TextsController;
