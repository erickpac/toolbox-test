const { expect } = require('chai');
const request = require('supertest');
const server = require('../../src/server');

describe('Server', () => {
  let app;

  beforeEach(() => {
    process.env.NODE_ENV = 'test';
    app = server.listen(3000, 'localhost');
  });

  afterEach(() => {
    app.close();
  });

  describe('when the user request [GET]/non-existent resource', () => {
    it('should return a 404 error/payload', () => {
      const expectedPayload = {
        statusCode: 404,
        payload: {
          statusCode: 404,
          message: 'Unable to found request resource!',
        },
      };

      request(app)
        .get('/non-existent')
        .expect((res) => {
          expect(res.status).to.be.equal(404);
          expect(res.body).to.deep.equal(expectedPayload);
        });
    });
  });

  describe('when the user request [GET]/ resource', () => {
    it('should return 200 with project information', () => {
      request(app)
        .get('/')
        .expect((res) => {
          expect(res.status).to.be.equal(200);
          expect(res.body.env).to.be.equal('test');
          expect(res.body.project).to.be.equal('toolbox-backend');
        });
    });
  });

  describe('when the user request [POST]/add-text resource with text attribute', () => {
    it('should return 200 with project information', () => {
      request(app)
        .post('/add-word')
        .send({ text: 'this is a test' })
        .expect((res) => {
          expect(res.status).to.be.equal(200);
          expect(res.body.text).to.be.equal('this is a test');
        });
    });
  });

  describe('when the user request [POST]/add-text resource without text attribute', () => {
    it('should return 500 with message error', () => {
      request(app)
        .post('/add-word')
        .send({})
        .expect((res) => {
          expect(res.status).to.be.equal(500);
          expect(res.body.payload.message).to.be.equal('Text attribute is missing in body');
        });
    });
  });
});
