ARG NODE_IMAGE=node:8.11-alpine
FROM ${NODE_IMAGE}

WORKDIR /usr/src/app

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV

ARG NPM_REGISTRY=https://registry.npmjs.org/

COPY package*.json /usr/src/app/
RUN npm config set registry "$NPM_REGISTRY" && npm install

COPY . /usr/src/app

ENV PORT 5000
EXPOSE $PORT
CMD [ "npm", "start" ]
