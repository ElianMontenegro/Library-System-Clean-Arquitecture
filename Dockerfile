FROM node:14-alpine

ENV NODE_ENV development

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . .

RUN yarn install

RUN yarn global add nodemon

ENTRYPOINT ["yarn", "dev"]
