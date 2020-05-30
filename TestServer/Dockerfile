FROM node:12.16.1

WORKDIR /usr/src/app

COPY ./build/TestServer-*.zip ./TestServer.zip
RUN unzip TestServer.zip

RUN yarn

CMD ["yarn", "start"]
