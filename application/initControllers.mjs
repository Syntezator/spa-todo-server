import {initAccessControlController} from './accessControl/accessControl.controller.mjs'

/**
 * @typedef {import('./types').DiContainer} DiContainer
 * @typedef {import('fastify').RouteOptions} Route
 */

/**
 * @function initControllers 
 * @param {DiContainer} diContainer  
 * @returns {Route[]}
 */

export const initControllers = (diContainer) => {
  const accessControlRoutes = initAccessControlController(diContainer);
  return [
    ...accessControlRoutes,
  ];
};
