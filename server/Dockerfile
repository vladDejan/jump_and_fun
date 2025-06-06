# 1. Baza image sa Node.js
FROM node:18

# 2. Radni direktorijum u kontejneru
WORKDIR /app

# 3. Kopiraj sve fajlove
COPY . .

# 4. Instaliraj dependencije
RUN npm install

# 5. Transpajliraj TypeScript u JavaScript
RUN npx tsc

# 6. Otvori port za Fly.io
EXPOSE 5000

# 7. Pokreni backend (JavaScript build iz dist/)
CMD ["node", "dist/index.js"]