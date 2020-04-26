FROM nginx

COPY default.conf /etc/nginx/conf.d/
# RUN mkdir /etc/ssl
# COPY ssl-bundle.crt /etc/ssl/
# COPY pascal-enigma_site_key.txt /etc/ssl/
COPY build /usr/share/nginx/html/