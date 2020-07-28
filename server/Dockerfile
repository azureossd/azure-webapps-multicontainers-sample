FROM node:12.8
RUN mkdir /server
WORKDIR /server
ADD package.json /server/
RUN npm install
ADD . /server/

# ssh
ENV SSH_PASSWD "root:Docker!"
RUN apt-get update \
        && apt-get install -y --no-install-recommends dialog \
	    && apt-get install -y --no-install-recommends openssh-server \
	    && echo "$SSH_PASSWD" | chpasswd 

COPY sshd_config /etc/ssh/
COPY init.sh /usr/local/bin/

EXPOSE 3001
ENTRYPOINT ["/usr/local/bin/init.sh"]