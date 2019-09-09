import request from 'supertest';

import app from '../server';
import mockData from '../__mock__';

describe('Pokemon API Request', () => {
  it('GET home of a simple pokemon api endpoint', (done) => {
    request(app)
      .get('/')
      .end((err, res) => {
        expect(res.body.success).toBeTruthy();
        expect(res.status).toEqual(200);
        done();
      });
  });
  it('should throw status 400 with empty firstName when a new user to signup', (done) => {
    request(app)
      .post('/users')
      .send(mockData.noFirstName)
      .end((err, res) => {
        expect(res.status).toBe(400);
        expect(res.body.status).toEqual('error');
        expect(res.body.message).toEqual('Bad request');
        expect(res.body.response).toEqual('"firstName" is not allowed to be empty');
        done();
      });
  });
  it('should throw status 400 with empty lastName when a new user to signup', (done) => {
    request(app)
      .post('/users')
      .send(mockData.noLastName)
      .end((err, res) => {
        expect(res.status).toBe(400);
        expect(res.body.status).toEqual('error');
        expect(res.body.message).toEqual('Bad request');
        expect(res.body.response).toEqual('"lastName" is not allowed to be empty');
        done();
      });
  });
  it('should return status 200 while getting a user', (done) => {
    request(app)
      .get(`/users/5d10b5a1958cfc63d62b9dd1`)
      .end((err, res) => {
        expect(res.status).toBe(200);
        expect(res.body.success).toBeTruthy();
        done();
      });
  });
  it('should return status 200 while getting all users', (done) => {
    request(app)
      .get('/users')
      .end((err, res) => {
        expect(res.status).toBe(200);
        expect(res.body.success).toBeTruthy();
        done();
      });
  });
  it('should return status 200 while regisering a new user', (done) => {
    request(app)
      .post('/users')
      .send(mockData.userDetails)
      .end((err, res) => {
        expect(res.status).toBe(200);
        expect(res.body.res.phone).toEqual(mockData.userDetails.phone);
        done();
      });
  });

  it('should return status 200 while updating a user details', (done) => {
    request(app)
      .patch('/users')
      .end((err, res) => {
        expect(res.status).toBe(200);
        expect(res.body.success).toBeTruthy();
        done();
      });
  });
});

