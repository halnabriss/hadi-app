FROM node:14
WORKDIR /hadiapp
COPY package.json .
RUN npm install
COPY . .
EXPOSE 5060
CMD [ "npm", "run" , "start-dev" ]
