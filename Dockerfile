FROM node:17.3-slim AS build

# Create a folder for our app
RUN mkdir /app

# Set up the working directory
WORKDIR /app

# ENV NPM_TOKEN=F1348F1C-996E-42A3-891E-33AB0188B6F0

# ARG NPM_TOKEN  

COPY .npmrc .npmrc

COPY package*.json ./

# Note that we're installing all dependencies, unlike the buildpack
RUN npm install

# Copy the rest of the application
COPY . .

EXPOSE 8080

RUN npm run build

# Create a second-stage which copies the /dist folder
# and uses http-server to host the application
FROM node:17.3-slim

# Create an app folder
RUN mkdir /app

# Set /app as the working directory
WORKDIR /app

# Initialize a new node app and
# install http-server
RUN npm init -y && \
  npm install http-server


# Copy the built artifacts from the build stage
COPY --from=build /app/dist /app 

# Expose port
EXPOSE 8080

# Set the startup command
CMD ["./node_modules/.bin/http-server", "-P https://reddex-staging.com?"]