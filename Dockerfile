FROM node:16-alpine
WORKDIR /app
COPY package.json /app
RUN npm i && npm cache clean --force
COPY . /app
CMD node index.js
EXPOSE 3000
