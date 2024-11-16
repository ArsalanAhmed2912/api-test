FROM node:18-slim
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
EXPOSE 1000
CMD ["npm", "start"]