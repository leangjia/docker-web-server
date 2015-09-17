FROM docker.io/node:latest

MAINTAINER <gzlock> gzlock88@gmail.com

RUN mkdir -p /usr/src/myapp/host

COPY ./app.js /usr/src/myapp/app.js

#install plugin 
RUN cd /usr/src/myapp && npm install express mongoose body-parser cookie-parser mongo-express

COPY ./mongo-express /usr/src/myapp/node_modules/mongo-express

RUN cd /usr/src/myapp/node_modules/mongo-express && node app.js