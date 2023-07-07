# BunJS image
FROM jarredsumner/bun:0.5.1

# Base Dir
WORKDIR /app

# Bun and project config files
COPY package.json package.json
COPY bun.lockb bun.lockb

# Command to install bun
RUN bun install

# Main file
COPY index.ts index.ts

# Port
EXPOSE 3000

# Start command
ENTRYPOINT ["bun", "index.ts"]