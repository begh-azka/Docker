# Copying package.json separately increases efficiency as we make frequent changes to this file. When we build our docker file again, only this layer will get updated, rest will use cached data.
FROM node:8.16.1-alpine
WORKDIR /app
COPY package.json /app/package.json
RUN npm install
EXPOSE 5200
COPY . /app
CMD node index.js
