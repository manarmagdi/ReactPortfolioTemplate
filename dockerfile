#first to build the source code inside a Node.js
FROM node:alpine AS build 
WORKDIR /myportf
COPY .  .
RUN npm install
RUN npm run build 


#second for nginx server to run the portfolio on it 
FROM nginx:alpine
COPY --from=build myportf/build  /usr/share/nginx/html      
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

