FROM node:9.4
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

EXPOSE 2222 3001
ENV PORT 3001
ENTRYPOINT ["/usr/local/bin/init.sh"]