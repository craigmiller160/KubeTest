FROM node:12.16.1

WORKDIR /usr/src/app

COPY ./build/OtherServer-*.zip ./OtherServer.zip
RUN unzip OtherServer.zip

RUN yarn

CMD ["yarn", "start"]
