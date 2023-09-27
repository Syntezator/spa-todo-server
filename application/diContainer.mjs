import {initDb} from './infra/db.mjs'
import {EventEmitter} from 'node:events';
import {initMailer} from './infra/mailer.mjs';
import {initAccessControlService, initAccessControlDeps} from './accessControl/accessConrol.service.mjs';

const db = await initDb();
const bus = new EventEmitter();
const mailer = initMailer(bus);

const accessControlDeps = initAccessControlDeps(db, bus);
const accessControlService = initAccessControlService(accessControlDeps);

/**
 * @typedef {import('./types').DiContainer} DiContainer
 * @type {DiContainer}
 */

export const diContainer = {
  db,
  bus,
  mailer,
  accessControlService,
};
