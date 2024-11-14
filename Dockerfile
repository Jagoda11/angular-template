# Use an official Node.js runtime as the base image
FROM node:latest

# Set the working directory inside the container
WORKDIR /app

# Set environment variable for Docker
ENV DOCKER=true

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install --legacy-peer-deps

# Disable Angular CLI analytics
ENV NG_CLI_ANALYTICS=false

# Copy the rest of the application code to the container
COPY . .

# Expose the default Angular port
EXPOSE 4200

# Command to start the Angular app
CMD ["npm", "run", "start"]

