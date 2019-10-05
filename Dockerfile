FROM node:12

COPY package*.json ./

WORKDIR /app

RUN npm install

COPY . .

CMD [ "dev", "nodemon", "src/index" ]