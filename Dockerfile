FROM node:16.18-buster-slim

COPY . ./app

WORKDIR /app

RUN npm install

EXPOSE 3003

CMD ["npm", "run","server"]
