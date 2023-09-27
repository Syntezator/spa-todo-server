import {AccessControlService} from './accessControl/types';
import {Mailer} from './infra/types'
import {Pool} from 'pg';
import {EventEmitter} from 'node:stream';

export interface DiContainer {
  db: Pool;
  bus: EventEmitter;
  mailer: Mailer;
  accessControlService: AccessControlService; 
};
