# Use Node 20 LTS for compatibility and stable Next.js support
FROM node:20-alpine AS base
WORKDIR /app

# Install dependencies (cache layer)
FROM base AS deps
COPY package.json package-lock.json* ./
RUN npm ci --silent

# Build stage
FROM base AS build
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Copy only necessary files
COPY --from=build /app/next.config.mjs ./
COPY --from=build /app/public ./public
COPY --from=build /app/.next ./.next
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json

# Expose port used by Next.js
EXPOSE 3000

CMD [ "npm", "start" ]
