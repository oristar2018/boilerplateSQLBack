FROM node:10

WORKDIR /user/src/server

COPY package*.json ./

COPY . .

RUN npm install

EXPOSE 8888

CMD ["npm", "start"]
