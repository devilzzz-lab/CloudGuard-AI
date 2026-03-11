FROM node:18

WORKDIR /app

COPY mern-stack/backend/package.json .

RUN npm install

COPY mern-stack/backend .

EXPOSE 3001

CMD ["node", "server.js"]