import supertest from 'supertest';

const env = require('dotenv').config();

const api = supertest(process.env.baseurl);

export default () => api.get('/posts')
.set('Accept', 'application/json')
.set('Content-Type', 'application/json')