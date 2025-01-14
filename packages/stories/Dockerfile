FROM node:20.12-buster-slim

WORKDIR /app

COPY package*.json ./

COPY . .

RUN yarn install --immutable --immutable-cache --check-cache

EXPOSE 6006

CMD ["yarn", "storybook"]
