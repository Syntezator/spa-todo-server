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

const getAllProjects = async (deps) => {
  const {models: {accessControlModel}} = deps;
  const allProjects = await accessControlModel.getAllProjects(); 
  return allProjects;
};

const deleteProject = async (deps, id) => {
  const {models: {accessControlModel}} = deps;
  const deletedProject = await accessControlModel.deleteProject(id); 
  return deletedProject;
};

const addTask = async (deps, taskToAdd) => {
  const {models: {accessControlModel}} = deps;
  const addedTask = await accessControlModel.addTask(taskToAdd); 
  return addedTask;
};

const getAllTasks = async (deps) => {
  const {models: {accessControlModel}} = deps;
  const allTasks = await accessControlModel.getAllTasks(); 
  return allTasks;
};

const getTaskById = async (deps, id) => {
  const {models: {accessControlModel}} = deps;
  const taskById = await accessControlModel.getTaskById(id); 
  return taskById;
};

const deleteTask = async (deps, id) => {
  const {models: {accessControlModel}} = deps;
  const deletedTask = await accessControlModel.deleteTask(id); 
  return deletedTask;
};

const updateTask = async (deps, taskToUpdate, id) => {
  const {models: {accessControlModel}} = deps;
  const updatedTask = await accessControlModel.updateTask(taskToUpdate, id); 
  return updatedTask;
};
// /**
//  * @function initAccessControlService
//  * @param {Deps} deps
//  * @returns {AccessControlService} 
//  */

export const initAccessControlService = (deps) => ({
  metadata: {events: {emit: ['sendEmail']}},
  comands: {
    addProject: partial(addProject, deps),
    getAllProjects: partial(getAllProjects, deps),
    deleteProject: partial(deleteProject, deps),
    addTask: partial(addTask, deps),
    getAllTasks: partial(getAllTasks, deps),
    deleteTask: partial(deleteTask, deps),
    updateTask: partial(updateTask, deps),
    getTaskById: partial(getTaskById, deps),
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
