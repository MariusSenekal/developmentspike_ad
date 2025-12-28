# Build stage
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application files
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM node:20-alpine AS runner

# Set working directory
WORKDIR /app

# Set node environment to production
ENV NODE_ENV=production

# Copy package files
COPY package*.json ./

# Install only production dependencies
RUN npm ci --omit=dev

# Copy built application from builder stage
COPY --from=builder /app/.output /app/.output

# Expose the port the app runs on
EXPOSE 3000

# Set environment variables (these can be overridden at runtime)
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

# Start the application
CMD ["node", ".output/server/index.mjs"]
