FROM php:8.0-apache

LABEL org.opencontainers.image.authors="Hullick Bartholo Gomes<hullick02@gmail.com>"
LABEL "com.example.vendor"="Ship Smart"
LABEL version="1.0"
LABEL description="A ship smart's laravel and vue test."

VOLUME "/var/www/html"
COPY ./php.ini /usr/local/etc/php
COPY ./entrypoint.sh /tmp

RUN echo "#Updating OS' packages"
RUN apt-get update

RUN echo "#Installing mysql extension"
RUN docker-php-ext-install mysqli pdo pdo_mysql

RUN echo "#Installing composer"

WORKDIR /tmp

RUN curl -sS https://getcomposer.org/installer -o composer-setup.php

RUN apt install -y unzip && \
php composer-setup.php --install-dir=/usr/local/bin --filename=composer

RUN a2enmod rewrite
RUN chmod +x ./entrypoint.sh

WORKDIR /var/www/html

ENTRYPOINT ["sh", "/tmp/entrypoint.sh"]
