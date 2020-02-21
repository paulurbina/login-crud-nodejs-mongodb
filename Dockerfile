FROM node:latest

WORKDIR /usr/src/app

COPY package*.json .

RUN npm i

COPY . .

EXPOSE 2323

CMD [ "npm", "start" ]