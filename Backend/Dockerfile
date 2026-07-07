FROM node:20-bookworm-slim

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev

COPY . .

RUN mkdir -p /app/data /app/uploads

ENV NODE_ENV=production

EXPOSE 5000

CMD ["npm", "start"]
