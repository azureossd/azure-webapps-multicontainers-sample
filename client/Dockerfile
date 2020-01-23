FROM node:9.4
RUN mkdir /client
WORKDIR /client
ADD package.json /client/
RUN npm install
ADD . /client/

# ssh
ENV SSH_PASSWD "root:Docker!"
RUN apt-get update \
        && apt-get install -y --no-install-recommends dialog \
	    && apt-get install -y --no-install-recommends openssh-server \
	    && echo "$SSH_PASSWD" | chpasswd 

COPY sshd_config /etc/ssh/
COPY init.sh /usr/local/bin/

EXPOSE 3000 2222
ENTRYPOINT ["/usr/local/bin/init.sh"]