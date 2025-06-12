# dollarbaz-platform
Fintech Platform

# dollarbaz-platform

A monorepo-based fintech ecosystem built with Fastify, Next.js, tRPC, and Prisma. This repository contains backend services, a Telegram bot, and a web frontend, along with shared packages for authentication, database access, service adapters, and the wallet engine.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Monorepo Structure](#monorepo-structure)
- [Getting Started](#getting-started)
  - [Install Dependencies](#install-dependencies)
  - [Local Development](#local-development)
  - [Building & Testing](#building--testing)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)

## Prerequisites
- Node.js (>=16)
- pnpm (>=7)
- Docker & Docker Compose (for local databases and queues)

## Monorepo Structure
```
/
├── apps/
│   ├── backend/         Fastify + tRPC API
│   ├── telegrambot/     Telegram bot service
│   └── web/             Next.js frontend
└── packages/
    ├── auth/            Authentication helpers
    ├── db/              Prisma client & migrations
    ├── services/        External service adapters
    └── wallet-engine/   Core wallet logic & types
```

## Getting Started

### Install Dependencies
```bash
pnpm install
```

### Local Development
Start all services in development mode:
```bash
pnpm dev
```
This runs:
- `apps/backend`: `pnpm --filter backend dev`
- `apps/telegrambot`: `pnpm --filter telegrambot dev`
- `apps/web`: `pnpm --filter web dev`

### Building & Testing
- Build all packages and apps:
  ```bash
  pnpm build
  ```
- Run tests across the monorepo:
  ```bash
  pnpm test
  ```

## Environment Variables
Environment files are located in the `/env/` directory. Rename `.env.example` files and provide values for:
- `backend.env`
- `telegrambot.env`
- `web.env`

## Contributing
1. Fork the repo and create a feature branch.
2. Follow the coding standards and add tests where applicable.
3. Submit a pull request for review.