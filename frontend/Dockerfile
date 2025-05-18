FROM node:18 AS build-stage

WORKDIR /app
COPY . .

RUN npm install
ENV PATH /app/node_modules/.bin:$PATH
RUN npm run build

FROM nginx:alpine AS production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
