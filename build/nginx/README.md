### Changed
worker_processes  auto;
server_tokens off;
tcp_nopush     on;
gzip  on;

### Disabled
error_log  /var/log/nginx/error.log warn;
access_log  /var/log/nginx/access.log  main;