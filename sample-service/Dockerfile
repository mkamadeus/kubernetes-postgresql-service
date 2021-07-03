# Build dependencies
FROM mhart/alpine-node:latest
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install

# Run from slim image
FROM mhart/alpine-node:slim
WORKDIR /app
COPY --from=0 /app .
COPY . .
CMD ["yarn", "start"]