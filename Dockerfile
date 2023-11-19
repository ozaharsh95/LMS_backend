FROM node:10-alpine
WORKDIR /app
COPY . /app
RUN npm install
EXPOSE 7000
CMD node index.js