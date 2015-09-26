FROM docker.io/node:slim

MAINTAINER <gzlock> gzlock88@gmail.com

#install plugin
RUN mkdir -p /usr/src/myapp/host \
    && cd /usr/src/myapp \
    && npm install express mongoose body-parser cookie-parser express-xml-bodyparser express-session basic-auth ejs morgan debug static-favicon request cheerio socket.io

WORKDIR /usr/src/myapp

COPY app.js ./

CMD ["node","app"]