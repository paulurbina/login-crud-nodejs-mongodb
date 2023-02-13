# FROM node:12.18.3-alpine3.9
FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

# CMD [ "npx", "nodemon", "src/index" ]
CMD [ "npm", "start" ]