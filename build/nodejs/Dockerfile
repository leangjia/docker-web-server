FROM docker.io/node:latest

MAINTAINER <gzlock> gzlock88@gmail.com

#install golbal plugin 
RUN npm install -g express mongoose body-parser cookie-parser

#link the global modules path to app path
RUN ln -s /usr/local/lib/node_modules /usr/src/myapp