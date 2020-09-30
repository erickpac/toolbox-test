# build environment
FROM node:13 as build

# Create app directory
WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./

RUN npm ci --silent

COPY . ./

RUN npm run build

# production environment
FROM nginx:stable-alpine

COPY --from=build /usr/src/app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
