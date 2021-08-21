FROM node:lts-alpine
WORKDIR /app
COPY ./payment .
ENV PORT=9090
EXPOSE ${PORT}
RUN npm install
CMD npm start