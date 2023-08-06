FROM maven:3.8.2-jdk-8
WORKDIR /kredos-backend
COPY . .
RUN mvn clean install
CMD ["nohup","java", "-jar", "target/spring-boot-web-0.0.1-SNAPSHOT.jar"]