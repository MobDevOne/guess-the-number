FROM node:16-alpine

COPY build/ /build

RUN npm install -g serve
EXPOSE 3000

CMD serve -s /build