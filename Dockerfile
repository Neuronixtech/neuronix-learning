FROM node:20-alpine

WORKDIR /app

# Install backend deps first (better layer caching)
COPY pneuronics-backend/package*.json pneuronics-backend/
RUN cd pneuronics-backend && npm install --omit=dev

# Copy backend source and the sibling frontend (server.js serves it via ../pneuronics-frontend)
COPY pneuronics-backend/ pneuronics-backend/
COPY pneuronics-frontend/ pneuronics-frontend/

WORKDIR /app/pneuronics-backend

ENV NODE_ENV=production
EXPOSE 3000

CMD ["node", "server.js"]
