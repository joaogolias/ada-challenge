FROM node:21.2.0 AS ui-build
WORKDIR /

COPY / ./front

WORKDIR ./front
RUN yarn ci && yarn build

EXPOSE 3000

CMD ["yarn", "start"]
