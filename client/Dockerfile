FROM node:20.12-buster-slim

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 3001

CMD ["tail", "-f", "/dev/null"]
