# ---- Build stage ----
    FROM node:20-alpine AS builder

    WORKDIR /app
    
    # Copiamos dependencias
    COPY package*.json ./
    
    # Si alguna vez tuvieras problemas de peer deps,
    # cambia esto por: RUN npm install --legacy-peer-deps
    RUN npm install
    
    # Copiamos el resto del código
    COPY . .
    
    # Build del panel admin + API
    RUN npm run build
    
    # ---- Runtime stage ----
    FROM node:20-alpine AS runner
    
    WORKDIR /app
    ENV NODE_ENV=production
    ENV PORT=1337
    ENV HOST=0.0.0.0
    
    # Copiamos todo lo ya preparado desde builder
    COPY --from=builder /app ./
    
    EXPOSE 1337
    
    CMD ["npm", "run", "start"]
    