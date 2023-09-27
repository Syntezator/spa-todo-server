import tap from 'tap';
import dotenv from 'dotenv';
import assert from 'node:assert/strict';

tap.mochaGlobals();
dotenv.config();

import {generateHtml, generateEmailOptions} from './generateEmailOptions.mjs';

const adminForEmail = {
  name:'test', 
  email:'test@test.ru', 
  magicToken:'aaasdasdasdadasddfsdfsdfsdcsdcds'
};

const expectedEmailOptions = {
  to: adminForEmail.email,
  subject: 'Уведомление от All For Fans',
  html: generateHtml(
    adminForEmail.name, 
    `${process.env.CLIENT_URL}/${adminForEmail.magicToken}`
  ),
};

describe('generateEmailOptions:', () => {
  it('Unit test 1', () => {
    const emailOptions = generateEmailOptions(adminForEmail);
    assert.deepEqual(emailOptions, expectedEmailOptions);
  });
});
