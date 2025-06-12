import { FastifyInstance } from 'fastify';
import { walletService } from '@wallet/walletService';
import { Currency } from '@prisma/client';
import { auth } from '../plugins/auth';

export default async function walletRoutes(fastify: FastifyInstance) {
  fastify.get('/wallet/balance', { preHandler: [auth] }, async (req, reply) => {
    const userId = req.user.id;
    const currency = req.query.currency as Currency;

    if (!currency || !['USD', 'USDT', 'BTC'].includes(currency)) {
      return reply.status(400).send({ error: 'Invalid or missing currency' });
    }

    try {
      const balance = await walletService.getBalance(
        userId,
        currency as Currency,
      );
      return reply.send(balance);
    } catch (err) {
      req.log.error(err);
      return reply.status(500).send({ error: 'Unable to fetch balance' });
    }
  });
}
