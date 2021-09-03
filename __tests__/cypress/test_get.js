import endpoint from '../../endpoints/get'
import * as schema from '../../schema/schema'

const { matchers } = require('jest-json-schema');

expect.extend(matchers);
let response;

describe('API Automation Test - Cypress', () => {
    test(`GET`, async () => {
        response = await endpoint();
        expect(response.status).toBe(200);
        expect(response.body).toMatchSchema(schema.dataresponse);
    });
});
