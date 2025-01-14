FROM node:20.12-buster-slim

WORKDIR /app

COPY . .

RUN yarn install --immutable --immutable-cache --check-cache

RUN yarn build

EXPOSE 3001

CMD ["yarn", "start"]
