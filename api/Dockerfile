FROM oven/bun:latest

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json bun.lock* ./
RUN bun install --frozen-lockfile --production

# Copy source code
COPY . .

# Expose port
EXPOSE 3000

# Start the application
CMD ["bun", "run", "src/server.ts"] 