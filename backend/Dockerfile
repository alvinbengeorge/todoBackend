# syntax=docker/dockerfile:1

# Comments are provided throughout this file to help you get started.
# If you need more help, visit the Dockerfile reference guide at
# https://docs.docker.com/engine/reference/builder/

ARG NODE_VERSION=21.3.0
ARG PNPM_VERSION=8.11.0

FROM node:${NODE_VERSION}-alpine

# Use production node environment by default.

COPY . /app
WORKDIR /app

# Install pnpm.
RUN npm install pnpm -g

# Download dependencies as a separate step to take advantage of Docker's caching.
# Leverage a cache mount to /root/.local/share/pnpm/store to speed up subsequent builds.
# Leverage a bind mounts to package.json and pnpm-lock.yaml to avoid having to copy them into
# into this layer.
RUN pnpm install 
RUN pnpm build

# Run the application as a non-root user.

# Expose the port that the application listens on.
EXPOSE 8000

# Run the application.
CMD pnpm start 0.0.0.0
