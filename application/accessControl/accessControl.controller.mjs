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
  },
  {
    method: 'POST',
    url: '/task/add',
    handler: async (req, reply) => {
      /** @type {*} */
      const taskToAdd = req.body;
      const {accessControlService} = diContainer;
      /** @type {*} */
      const {addTask} = accessControlService.comands;
      const addedTask = await addTask(taskToAdd);
      reply.code(200).send({addedTask});
    },
  },
  {
    method: 'GET',
    url: '/tasks', 
    handler: async (req, reply) => {
      /** @type {*} */
      const {accessControlService} = diContainer;
      const {getAllTasks} = accessControlService.comands;
      const tasks = await getAllTasks();
      reply.code(200).send(tasks);
    },
  },
  {
    method: 'GET',
    url: '/task/:id', 
    handler: async (req, reply) => {
      /** @type {*} */
      const {id} = req.params;
      const {accessControlService} = diContainer;
      /** @type {*} */
      const {getTaskById} = accessControlService.comands;
      const taskById = await getTaskById(id);
      reply.code(200).send(taskById);
    },
  },
  {
    method: 'DELETE',
    url: '/task/delete/:id',
    handler: async (req, reply) => {
      
      /** @type {*} */
      const {id} = req.params;
      console.log('====================' + id + '=======================')
      const {accessControlService} = diContainer;
      /** @type {*} */
      const {deleteTask} = accessControlService.comands;
      const deletedTask= await deleteTask(id);
      reply.code(200).send({success: Boolean(deletedTask)}); 
    },
  },
  {
    method: 'PUT',
    url: '/task/update/:id',
    handler: async (req, reply) => {
      /** @type {*} */
      const {id} = req.params;
      const taskToUpdate = req.body;
      const {accessControlService} = diContainer;
      /** @type {*} */
      const {updateTask} = accessControlService.comands;
      const updatedTask = await updateTask(taskToUpdate, id);
      reply.code(200).send({updatedTask});
    },
  },
];
