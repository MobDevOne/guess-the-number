FROM node:16-alpine

COPY src/frontend/build/ /build

RUN npm install -g serve

CMD serve -s /build