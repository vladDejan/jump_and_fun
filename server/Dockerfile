# Base image
FROM node:18

# 1. Set working directory
WORKDIR /app

# 2. Copy package.json
COPY package*.json ./

# 3. Install dependencies
RUN npm install

# 4. Install TypeScript globally
RUN npm install -g typescript

# 5. Copy all source code
COPY . .

# 6. Transpile TypeScript
RUN tsc

# 7. Expose port (ako koristiš)
EXPOSE 5000

# 8. Start command
CMD ["node", "dist/index.js"]
