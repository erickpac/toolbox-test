FROM node:13

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

ARG APP_PORT
ENV APP_PORT=${APP_PORT}

ARG APP_HOST
ENV APP_HOST=${APP_HOST}

EXPOSE 3000

CMD [ "node", "index.js" ]
