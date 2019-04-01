FROM nginx:alpine
COPY . /usr/share/nginx/html
# docker build -t html:v1 .
# docker run -d -p 80:80 html:v1