FROM node:18

WORKDIR /app

COPY mern-stack/frontend/package.json .

RUN npm install

COPY mern-stack/frontend .

EXPOSE 3000

CMD ["npm", "start"]