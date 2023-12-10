FROM node:21.2.0 AS ui-build
WORKDIR /

COPY / ./front

EXPOSE 3000

WORKDIR ./front
RUN yarn install && yarn build

CMD ["yarn", "start"]
