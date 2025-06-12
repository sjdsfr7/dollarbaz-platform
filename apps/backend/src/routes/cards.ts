import { FastifyInstance, FastifyRequest } from 'fastify';
import {
  CreateCardRequestSchema,
  CreateCardRequestInput,
} from '../schemas/cards';
import { createCardRequest } from '../services/cards';

export default async function cardsRoutes(app: FastifyInstance) {
  app.post(
    '/request',
    {
      schema: {
        body: CreateCardRequestSchema,
      },
    },
    async (req: FastifyRequest<{ Body: CreateCardRequestInput }>, reply) => {
      const result = await createCardRequest(req.body);
      return reply.code(200).send(result);
    },
  );
}
// The above code defines a Fastify route for creating a card request.
// It uses a POST method and expects a request body that matches the CreateCardRequestSchema.
// The createCardRequest function is called with the request body, and the result is sent back with a 200 status code.
// The route is registered with the Fastify instance passed as an argument to the cardsRoutes function.