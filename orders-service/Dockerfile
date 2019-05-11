FROM node:8.12.0-alpine
ENV NAME Orders
WORKDIR /orders-service
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
EXPOSE 8000
COPY . .
CMD ["npm" , "start" ]
