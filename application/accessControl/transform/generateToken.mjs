import {randomBytes} from 'node:crypto';

/**
 * @function generateToken
 * @description Random cripto token
 * @returns {string}
 */

export const generateToken = () => randomBytes(16).toString('hex');
