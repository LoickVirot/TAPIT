FROM node:lts-alpine

WORKDIR /app

COPY ./package.json .
COPY ./package-lock.json .

RUN npm install && npm install --only=dev

COPY . . 

CMD [ "npm", "run", "dev" ]