    # Use the official Node.js 18 image as the base
    FROM node:22-alpine AS builder

    # Set the working directory in the container
    WORKDIR /app

    # Copy package.json and package-lock.json (if available)
    COPY package*.json ./

    # Install dependencies
    RUN npm install

    # Copy the rest of the application code
    COPY . .

    # Build the Next.js application
    RUN npm run build

   # Production stage
    FROM node:22-alpine

    WORKDIR /app
    
    # Copy only necessary files from the builder stage
    COPY --from=builder /app/next.config.ts ./
    COPY --from=builder /app/package.json ./
    COPY --from=builder /app/package-lock.json ./
    COPY --from=builder /app/public ./public
    COPY --from=builder /app/.next ./.next
    
    RUN npm install --production
    
    # Expose the port the app will run on
    EXPOSE 3000

    # Start the app
    CMD ["npm", "start"]