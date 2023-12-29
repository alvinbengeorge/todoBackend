ARG NODE_VERSION=21.3.0
ARG PNPM_VERSION=8.11.0

FROM node:${NODE_VERSION}-alpine

# Use production node environment by default.

COPY . /app
WORKDIR /app

# Install pnpm.
RUN npm install -g pnpm

RUN pnpm install
RUN pnpm build

EXPOSE 3000

CMD pnpm start -H 0.0.0.0