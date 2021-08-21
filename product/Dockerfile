FROM node:lts-alpine
WORKDIR /app
COPY ./product .
ENV PORT=4040
EXPOSE ${PORT}
RUN npm install
CMD npm start