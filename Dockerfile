FROM node:lts-alpine

RUN mkdir /app

WORKDIR /app

COPY . . 

RUN npm install && npm install --only=dev

CMD [ "npm", "run", "dev" ]