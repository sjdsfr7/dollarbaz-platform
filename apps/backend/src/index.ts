import 'dotenv/config';
import Fastify from 'fastify';
import cors from '@fastify/cors';
import helmet from '@fastify/helmet';
import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox';

import cardsRoutes from './routes/cards';
import walletRoutes from './routes/wallet';

async function buildServer() {
  const app = Fastify({ logger: true }).withTypeProvider<TypeBoxTypeProvider>();

  // Register core plugins
  await app.register(cors);
  await app.register(helmet);

  // Register your domain routes
  await app.register(cardsRoutes, { prefix: '/cards' });
  await app.register(walletRoutes, { prefix: '/wallet' });

  // Health-check for uptime monitoring
  app.get('/health', async () => ({ status: 'ok' }));

  return app;
}

async function start() {
  const app = await buildServer();
  const port = Number(process.env.PORT) || 4000;
  try {
    await app.listen({ port, host: '0.0.0.0' });
    app.log.info(`🚀 Backend listening at http://0.0.0.0:${port}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
}

start();
