const expect = require('chai').expect;
const request = require('request');
const port = 8090;

it('Home page default content', function(done) {
  request(`http://localhost:${port}` , function(error, response, body) {
    expect(body).to.equal('Hello, World');
    done();
  });
});

it('Home page variable request parameter content', function(done) {
  request(`http://localhost:${port}?name=James` , function(error, response, body) {
    expect(body).to.equal('Hello, James');
    done();
  });
});

it('Home page status', function(done) {
  request(`http://localhost:${port}` , function(error, response, body) {
    expect(response.statusCode).to.equal(200);
    done();
  });
});

it('About page status', function(done) {
  request(`http://localhost:${port}/about` , function(error, response, body) {
    expect(response.statusCode).to.equal(200);
    done();
  });
});

// we are testing contact page which does not exist, and it should return 404 status code
it('Contact page status', function(done) {
  request(`http://localhost:${port}/contact` , function(error, response, body) {
    expect(response.statusCode).to.equal(404);
    done();
  });
});