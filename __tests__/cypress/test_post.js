import { data, inputdata } from '../../data/data';
import endpoint from '../../endpoints/post'

const { matchers } = require('jest-json-schema');

expect.extend(matchers);
let response;

describe('API Automation Test - Cypress', () => {
    test(`POST`, async () => {
        response = await endpoint(inputdata);
        expect(response.status).toBe(201);
        console.log(response.body);
        expect(response.body.title).toEqual(inputdata.title);
        expect(response.body.body).toEqual(inputdata.body);
        expect(response.body.userId).toEqual(inputdata.userId);
    });
});
