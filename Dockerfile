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
FROM nginx:stable-alpine

COPY --from=build /app/dist /bin/www

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]