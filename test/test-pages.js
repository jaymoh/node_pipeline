const chai = require('chai');
const chaiHttp = require('chai-http')
const app = require('../app')

chai.use(chaiHttp)
const expect = require('chai').expect

it('Home page default content', done => {
  chai
    .request(app)
    .get('/')
    .end((error, response) => {
    expect(response.text).to.equal('Hello, World')
    done()
  })
})

it('Home page variable request parameter content', done => {
  chai
    .request(app)
    .get('/?name=James')
    .end((error, response) => {
      expect(response.text).to.equal('Hello, James')
      done()
    })
})

it('Home page response status', done => {
  chai
    .request(app)
    .get('/')
    .end((error, response) => {
      expect(response.status).to.equal(200)
      done()
    })
});

it('About page status', function(done) {
  chai
    .request(app)
    .get('/about')
    .end((error, response) => {
      expect(response.status).to.equal(200)
      done()
    })
});

// we are testing contact page which does not exist, and it should return 404 status code
it('Contact page status', done => {
  chai
    .request(app)
    .get('/contact')
    .end((error, response) => {
      expect(response.status).to.equal(404)
      done()
    })
});