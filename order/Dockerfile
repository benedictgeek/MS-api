FROM node:lts-alpine
WORKDIR /app
COPY ./order .
ENV PORT=7070
EXPOSE ${PORT}
RUN npm install
CMD npm start