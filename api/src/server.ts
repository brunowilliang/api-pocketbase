import Fastify from 'fastify'
import { api } from './services/api';

const fastify = Fastify({
  logger: false
});

fastify.get("/", async (request, reply) => {
	const records = await api.collection('users').getFullList();
	reply.send(records);
});

const start = async () => {
  try {
    await fastify.listen({ port: 3000, host: '0.0.0.0' }).then(() => {
      console.log("Server is running on 0.0.0.0:3000");
    });
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start();