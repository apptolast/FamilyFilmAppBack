# STAGE INIT
FROM node:16.14-alpine as builder

# Base Dir
WORKDIR /app

# Project config files
COPY package.json package.json
COPY yarn.lock yarn.lock
COPY prisma ./prisma/
COPY .env ./
COPY tsconfig.json ./

COPY src/ ./src/

RUN yarn

COPY . .

# STAGE MAIN
FROM node:16.14-alpine

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/src ./src
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/.docker/.env ./

# Port
EXPOSE 3000

# Start command
CMD ["yarn", "run", "start:migrate"]