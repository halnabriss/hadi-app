FROM node:14
WORKDIR /hadiapp
COPY . .
RUN npm install
EXPOSE 5050
CMD [ "npm", "start" ]
