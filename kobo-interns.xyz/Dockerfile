# Dockerfile
FROM httpd:2.4

# Copy custom configuration
COPY httpd.conf /usr/local/apache2/conf/httpd.conf

# Copy static content
COPY public_html/ /usr/local/apache2/htdocs/

# Validate the configuration at build time
RUN httpd -t

EXPOSE 80
