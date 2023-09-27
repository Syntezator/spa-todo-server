import dotenv from 'dotenv';
import fastify from 'fastify';
import cors from '@fastify/cors';
import {initControllers} from './initControllers.mjs'
import {diContainer} from './diContainer.mjs'

const isDev = process.env.NODE_ENV === 'dev';
if (isDev) dotenv.config();

const serverConfig = {
  host: process.env.SERVER_HOST, 
  port: Number.parseInt(`${process.env.SERVER_PORT}`, 10),
};

const server = fastify({logger: true});
const routes = initControllers(diContainer);

for (const route of routes) server.route(route);

server
  .register(cors)
  .listen(serverConfig);
  