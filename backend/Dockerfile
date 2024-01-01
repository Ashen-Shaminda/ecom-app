FROM node:21.5.0-alpine3.18

RUN addgroup app && adduser -S -G app app
USER app

WORKDIR /app
COPY --chown=app:node package*.json ./
RUN npm install -
COPY --chown=app:node . .

EXPOSE 3001 

CMD ["npm", "start"]