FROM node:21.2.0-alpine3.17
COPY . /app
WORKDIR /app
RUN npm install -D
RUN npm install typescript
EXPOSE 8000
CMD npm start