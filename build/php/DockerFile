FROM docker.io/php:5.6.12-fpm

# Install other needed extensions
RUN apt-get update && apt-get install -y libfreetype6 libjpeg62-turbo libmcrypt4 libpng12-0 sendmail libssl-dev --no-install-recommends && rm -rf /var/lib/apt/lists/*
RUN buildDeps=" \
        libfreetype6-dev \
        libjpeg-dev \
        libldap2-dev \
        libmcrypt-dev \
        libpng12-dev \
        zlib1g-dev \
        libssl-dev \
    "; \
    set -x \
    && apt-get update && apt-get install -y $buildDeps --no-install-recommends && rm -rf /var/lib/apt/lists/* \
    && docker-php-ext-configure gd --enable-gd-native-ttf --with-jpeg-dir=/usr/lib/x86_64-linux-gnu --with-png-dir=/usr/lib/x86_64-linux-gnu --with-freetype-dir=/usr/lib/x86_64-linux-gnu \
    && docker-php-ext-install gd \
    && docker-php-ext-configure ldap --with-libdir=lib/x86_64-linux-gnu \
    && docker-php-ext-install ldap \
    && docker-php-ext-install mbstring \
    && docker-php-ext-install mcrypt \
    && docker-php-ext-install mysql \
    && docker-php-ext-install mysqli \
    && docker-php-ext-install pdo_mysql \
    && docker-php-ext-install zip \
    && pecl install mongo \
    && echo "extension=mongo.so" > /usr/local/etc/php/conf.d/mongo.ini\
    && apt-get purge -y --auto-remove $buildDeps \
    && cd /usr/src/php \
    && make clean \

# Setup timezone to Asia/Shanghai
RUN cat /usr/src/php/php.ini-production | sed 's/^;\(date.timezone.*\)/\1 \"Asia\/Shanghai\"/' > /usr/local/etc/php/php.ini


# Disable cgi.fix_pathinfo in php.ini
RUN sed -i 's/;\(cgi\.fix_pathinfo=\)1/\10/' /usr/local/etc/php/php.ini
