FROM oven/bun:latest as base

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json bun.lock* ./
RUN bun install --frozen-lockfile --production

# Copy source code
COPY . .

# Create non-root user (Ubuntu/Debian syntax)
RUN useradd -r -u 1000 -m -c "api user" -d /app -s /bin/bash apiuser
RUN chown -R apiuser:apiuser /app
USER apiuser

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=30s --retries=3 \
  CMD curl -f http://localhost:3000/ || exit 1

# Start the application
CMD ["bun", "run", "src/server.ts"] 