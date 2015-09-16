FROM docker.io/node:latest

MAINTAINER <gzlock> gzlock88@gmail.com

RUN mkdir -p /usr/src/myapp/host

COPY ./app.js /usr/src/myapp

#install golbal plugin 
RUN cd /usr/src/myapp && npm install express mongoose body-parser cookie-parser