# Set nginx base image
FROM node:18
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install glob rimraf
RUN npm install --only=development
COPY . .
RUN npm run build
CMD ["node", "dist/main"]
