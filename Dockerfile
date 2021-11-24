FROM php:8.0-apache

LABEL org.opencontainers.image.authors="Hullick Bartholo Gomes<hullick02@gmail.com>"
LABEL "com.example.vendor"="Ship Smart"
LABEL version="1.0"
LABEL description="A ship smart's laravel and vue test."

VOLUME "/var/www/html"

RUN echo "#Updating OS' packages"
RUN apt-get update

RUN echo "#Installing composer"

WORKDIR /tmp

RUN curl -sS https://getcomposer.org/installer -o composer-setup.php

RUN apt install -y unzip && \
php composer-setup.php --install-dir=/usr/local/bin --filename=composer

RUN echo "#Installing NodeJs 14"

RUN curl -fsSL https://deb.nodesource.com/setup_14.x | bash - && \
apt-get install -y nodejs


RUN echo "#Installing Python2"
RUN apt-get install -y python2

ENTRYPOINT ["/usr/sbin/httpd", "-D", "FOREGROUND"]
