import {EventEmitter as Bus} from 'node:events';
import {AccessControlModel} from './accessControl.model.mjs'
import {Pool as Db} from 'pg';

import {
  ProjectToAdd,
  ProjectFromDb,
} from './schema/types';

export type {
  ProjectToAdd,
  ProjectFromDb,
  Bus,
  Db,
  
}; 

export type EventName = 'sendEmail' | 'someEvent';

export type Events = {
  emit: EventName[];
};

export type Metadata = {
  events: Events;
};

export type RegisterAdminCmd = (projectToAdd: ProjectToAdd) => Promise<ProjectFromDb>;


export type ServiceCmds = {
  addProject: RegisterAdminCmd;
};

export type AccessControlService = {
  metadata: Metadata;
  comands: ServiceCmds;
};

export type Models = {
  accessControlModel: AccessControlModel;
};

export type Deps = {
  bus: Bus;
  models: Models;
};
