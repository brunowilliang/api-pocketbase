FROM alpine:latest

# Install necessary packages
RUN apk add --no-cache \
    ca-certificates \
    unzip \
    wget \
    && rm -rf /var/cache/apk/*

# Create app directory
WORKDIR /app

# Download and install PocketBase
ARG POCKETBASE_VERSION=0.22.21
RUN wget https://github.com/pocketbase/pocketbase/releases/download/v${POCKETBASE_VERSION}/pocketbase_${POCKETBASE_VERSION}_linux_amd64.zip \
    && unzip pocketbase_${POCKETBASE_VERSION}_linux_amd64.zip \
    && chmod +x pocketbase \
    && rm pocketbase_${POCKETBASE_VERSION}_linux_amd64.zip

# Create necessary directories
RUN mkdir -p /app/pb_data /app/pb_hooks /app/pb_public /app/pb_migrations

# Copy migrations and hooks from build context
COPY pb_migrations/ /app/pb_migrations/
COPY pb_hooks/ /app/pb_hooks/

# Set proper permissions
RUN chown -R 1000:1000 /app

# Create non-root user
RUN adduser -D -s /bin/sh -u 1000 pocketbase
USER pocketbase

# Expose port
EXPOSE 8080

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=30s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:8080/api/health || exit 1

# Run PocketBase
CMD ["/app/pocketbase", "serve", "--http=0.0.0.0:8080", "--dir=/app/pb_data"] 