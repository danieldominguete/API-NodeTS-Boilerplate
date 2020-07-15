FROM node:12.16-alpine

WORKDIR /API-NodeTS-Boilerplate

COPY package*.json ./
COPY tsconfig.json ./
COPY index.js ./
COPY /src ./src
COPY /config ./config
COPY /deploy ./deploy

RUN npm install 
RUN npm install typescript -g
RUN tsc -p tsconfig.json

EXPOSE 8000

CMD ["npm","start"]