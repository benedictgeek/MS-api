FROM node:lts-alpine
WORKDIR /app
COPY ./customer .
ENV PORT=5050
EXPOSE ${PORT}
RUN npm install
CMD npm start