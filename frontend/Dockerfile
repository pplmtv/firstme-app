# build & deploy stage
# base image
FROM node:18.13.0 AS builder
RUN apt-get update
RUN apt-get clean

# install
RUN apt-get install -y --no-install-recommends \
    net-tools \
    sudo \
    bzip2 \
    gcc \
    git \
    telnet \
    vim \ 
    iproute2 \
    iputils-ping

# work directory
WORKDIR /var/www/firstme-app

# copy under directory
COPY . .


# build
RUN npm install
RUN npm install axios
RUN npm install axios next-auth
# RUN npm install nodejs
# RUN npm run build

# deploy stage
# base image
# FROM nginx:1.11.7
# FROM nginx:1.25.2
# RUN apt-get update
# RUN apt-get clean

# install nothing

# nginx config file will be output to /etc/nginx/conf.d/ by envsubst
# COPY ./infra/docker/frontend/default.conf /etc/nginx/conf.d/default.conf
# COPY ./infra/docker/frontend/nginx.conf /etc/nginx/nginx.conf

# COPY ./default.conf /etc/nginx/conf.d/default.conf
# COPY ./nginx.conf /etc/nginx/nginx.conf

# copy index.html
# COPY --from=builder  /var/www/firstme/templates/index.html /usr/share/nginx/html/index.html

# copy static directory
# COPY --from=builder /var/www/firstme/static /usr/share/nginx/html/static

EXPOSE "3000"

CMD ["npm","run","dev"]
