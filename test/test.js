const request = require('supertest');
const app = require('../app');

describe('App', function() {
  let server;

  before(function(done) {
    server = app.listen(0, '127.0.0.1', done);
  });

  after(function(done) {
    server.close(done);
  });

  it('has the default page', function(done) {
    request(server)
      .get('/')
      .expect(/Welcome to Express/, done);
  });
}); 
