# build & deploy stage
# base image
FROM python:3.9
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
    iputils-ping \
    curl
RUN apt install -y default-mysql-client
RUN pip install pymysql cryptography

# output control
ENV PTHONNUNBUFFERED 1

# work directory
WORKDIR /var/www/firstme-app

# copy under directory
COPY . .

# install
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# DB migration
RUN python3 manage.py makemigrations
RUN python3 manage.py migrate

EXPOSE "8000"

# start-up
CMD python3 manage.py runserver 0.0.0.0:8000
