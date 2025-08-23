# 1. Baza image sa Node.js
FROM node:18

# 2. Radni direktorijum
WORKDIR /app

# 3. Kopiraj package.json i package-lock.json prvo
COPY package*.json ./

# 4. Instaliraj dependencije
RUN npm install

# 5. Kopiraj ostatak fajlova
COPY . .

# 6. Transpajliraj TypeScript
RUN npx tsc

# 7. Otvori port za Fly.io
EXPOSE 5000

# 8. Pokreni backend
CMD ["node", "dist/index.js"]
