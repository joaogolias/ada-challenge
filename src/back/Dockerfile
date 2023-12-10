FROM node:21.2.0 AS ui-build
WORKDIR /

COPY / ./back

EXPOSE 5000

WORKDIR ./back
RUN yarn install

CMD ["npm", "run", "start"]
