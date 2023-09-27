/**
 * @typedef {import('./types').AccessControlService} AccessControlService
 * @typedef {import('./types').ProjectToAdd} ProjectToAdd 
 * @typedef {import('./types').ProjectToAdd} ProjectFromDb 
 * @typedef {import('./types').Deps} Deps
 * @typedef {import('./types').Bus} Bus
 * @typedef {import('./types').Db} Db
 */

import {partial} from '../utils/partial.mjs';
import {AccessControlModel} from './accessControl.model.mjs';

/**
 * @function addProject
 * @param {Deps} deps
 * @param {ProjectToAdd} projectToAdd 
 * @returns {Promise<ProjectFromDb>}
 */

const addProject = async (deps, projectToAdd) => {
  const {models: {accessControlModel}} = deps;
  const addedProject = await accessControlModel.addProject(projectToAdd); 
  return addedProject;
};

/**
 * @function initAccessControlService
 * @param {Deps} deps
 * @returns {AccessControlService} 
 */

export const initAccessControlService = (deps) => ({
  metadata: {events: {emit: ['sendEmail']}},
  comands: {
    addProject: partial(addProject, deps),
  }
});

/**
 * @function initAccessControlDeps
 * @param {Db} db
 * @param {Bus} bus
 * @returns {Deps}
 */

export const initAccessControlDeps = (db, bus) => {
  const accessControlModel = new AccessControlModel(db);
  return {
    bus, 
    models: {accessControlModel},
  };
};
