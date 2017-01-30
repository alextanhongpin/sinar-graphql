FROM node:boron

# Create app directory
RUN mkdir -p /user/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json
RUN npm install

# Bundle app source
COPY . /usr/src/app

EXPOSE 4000

CMD [ "npm", "start" ]