chown -R :www-data .
find . -type f -not -path "./node_modules/*" -exec chmod 664 {} \;
find . -type d -not -path "./node_modules/*" -exec chmod 775 {} \;
composer install
apachectl -D FOREGROUND
