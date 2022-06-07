FROM node:16.10-alpine AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.17.1-alpine
COPY default.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/walkdog-ang /usr/share/nginx/html

FROM diamol/maven as builder

WORKDIR /usr/src/walkdog
COPY pom.xml .
RUN mvn -B dependency:go-offline

COPY . .
RUN mvn clean install

# app
FROM diamol/openjdk

WORKDIR /app
COPY --from=builder /usr/src/walkdog/target/walkdog-0.0.1-SNAPSHOT.jar .

EXPOSE 8080
ENTRYPOINT ["java", "-jar", "/app/walkdog-0.0.1-SNAPSHOT.jar"]

