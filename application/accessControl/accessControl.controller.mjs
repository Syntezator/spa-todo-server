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
  },
  {
    method: 'GET',
    url: '/project', 
    handler: async (req, reply) => {
      /** @type {*} */
      const {accessControlService} = diContainer;
      const {getAllProjects} = accessControlService.comands;
      const projects = await getAllProjects();
      reply.code(200).send(projects);
    },
  },
  {
    method: 'DELETE',
    url: '/project/delete/:id',
    handler: async (req, reply) => {
      
      /** @type {*} */
      const {id} = req.params;
      console.log('====================' + id + '=======================')
      const {accessControlService} = diContainer;
      /** @type {*} */
      const {deleteProject} = accessControlService.comands;
      const deletedProject = await deleteProject(id);
      reply.code(200).send({success: Boolean(deletedProject)}); 
    },
  }
];
