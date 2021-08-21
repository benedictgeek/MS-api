FROM node:lts-alpine
WORKDIR /app
COPY ./product .
ENV PORT=6060
EXPOSE ${PORT}
RUN npm install
CMD npm start