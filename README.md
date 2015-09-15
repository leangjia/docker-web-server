### Description
Docker images with:
- docker.io/Nginx:latest
- docker.io/PHP:5.6.12-fpm with MongoDB,gd,ldap,mbstring,mcrypt,mysql,mysqli,pdo_mysql,zip extensions.
- docker.io/Node.js:latest with Express,Mongoose,Body-parser,Cookie-parser
- docker.io/MongoDB:latest
- docker.io/MySQL:latest
- docker.io/BusyBox:latest

### About Path:
- ./buil						Build the Nodejs and PHP images folder
- ./nginx_conf			Nginx host config files folder
- ./www_ph					PHP website files folder
- ./www_nodejs			Nodejs website files folder
- ./mysql_data			MySQL data folder
- ./mongodb_data		MonboDB data folder

### How to use:
- git q84629462/docker
- docker-compose up -d

### License:MIT
