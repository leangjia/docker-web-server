### How to use:
- $ git clone https://github.com/gzlock/docker-web-server.git
- $ cd ./docker-web-server
- $ docker-compose up -d


### Docker images with:
- https://github.com/gzlock/docker-nginx/
- https://github.com/gzlock/docker-php-image
- https://github.com/gzlock/docker-node-base-image
- https://github.com/gzlock/docker-mongo-express
- docker.io/MongoDB:latest
- docker.io/MySQL:latest
- docker.io/BusyBox:latest

### About Path:

Path  | Description
------------- | -------------
./backup      | MySQL and MongoDB backup datas folder
./nginx_conf  | Nginx host config files folder
./www_php     | PHP website files folder
./www_nodejs  | Nodejs website files folder
./mysql_data  | MySQL data folder
./mongodb_data | MonboDB data folder
./ssl | Store ssl files(.key & .crt)

### About the app.js(https://github.com/gzlock/docker-node-base-image/blob/master/app.js)
* Support multi websites,example:
  * ./www_nodejs/a.com/index.js
  * ./www_nodejs/b.com/index.js
* Support hot deployment:
  * When modified the website index.js file(example:./www_nodejs/a.com/index.js), app.js will reload this file, Without rebooting node.js program

### Config
- MySQL username: root password: DROWSSAP
- Mongo-Express account: admin,password: pass

### TODO
DataBases(MySQL & MongoDB) data regular backups


### MIT License
