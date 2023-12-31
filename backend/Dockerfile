FROM node:14.16.0-alpine3.13

RUN addgroup app && adduser -S -G app app
USER app

WORKDIR /app
COPY --chown=app:node package*.json ./
RUN npm install -
COPY --chown=app:node . .

EXPOSE 3001 

CMD ["npm", "start"]