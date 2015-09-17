FROM docker.io/node:slim

MAINTAINER <gzlock> gzlock88@gmail.com

RUN mkdir -p /usr/src/myapp/host

COPY ./app.js /usr/src/myapp/app.js

#install plugin 
RUN cd /usr/src/myapp && npm install express mongoose body-parser cookie-parser express-session basic-auth jade morgan debug static-favicon