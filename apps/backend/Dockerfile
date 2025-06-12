# apps/backend/Dockerfile

# 1) Install dependencies
FROM node:16-alpine AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN npm install -g pnpm \
    && pnpm install --frozen-lockfile --filter backend

# 2) Build your backend
FROM node:16-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY apps/backend/tsconfig.json ./
COPY apps/backend/src ./src
RUN pnpm build --filter backend

# 3) Run the server
FROM node:16-alpine AS runner
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY package.json ./
EXPOSE 4000
CMD ["node", "dist/index.js"]