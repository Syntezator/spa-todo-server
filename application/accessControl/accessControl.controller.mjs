import {
  addProjectSchema, 
} from './schema/schema.mjs';


/**
 * @typedef {import('fastify').RouteOptions} Route
 * @typedef {import('../types').DiContainer} DiContainer
 */

/**
 * @function initAccessControlController
 * @param {DiContainer} diContainer
 * @returns {Route[]}
 */

export const initAccessControlController = (diContainer) => [
  {
    method: 'POST',
    url: '/project/add',
    schema: {
      body: addProjectSchema,
    },
    handler: async (req, reply) => {
      /** @type {*} */
      const projectToAdd = req.body;
      const {accessControlService} = diContainer;
      const {addProject} = accessControlService.comands;
      const addedProject = await addProject(projectToAdd);
      reply.code(200).send({addedProject});
    },
  }
];
