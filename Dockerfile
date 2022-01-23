FROM node:17.3-slim AS build

# Create a folder for our app
RUN mkdir /app

# Set up the working directory
WORKDIR /app 

COPY .npmrc .npmrc

COPY package*.json ./

# Note that we're installing all dependencies, unlike the buildpack
RUN npm install

# Copy the rest of the application
COPY . .

RUN npm run build

# Create a second-stage which copies the /dist folder
# and uses http-server to host the application
FROM nginx:stable-alpine

COPY --from=build /app/dist /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d

EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]